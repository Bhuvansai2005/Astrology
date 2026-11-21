import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import { connectDB } from '../db.js';
import { findCatalogItem } from '../config/catalog.js';
import { Order } from '../models/order.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ORDERS_FILE = path.resolve(__dirname, '../../data/orders.json');
const ORDER_REF_PATTERN = /^APB-[A-Z0-9-]{8,40}$/;
const MAX_ITEMS = 30;
const MAX_QUANTITY = 20;
const ORDER_WHATSAPP_NUMBER = '919164242099';

function hashAccessToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function createAccessToken() {
  return crypto.randomBytes(32).toString('base64url');
}

function safeText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isValidPhone(phone) {
  return /^[+()\d\s-]{7,30}$/.test(phone);
}

function isValidEmail(email) {
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createOrderReference(requestedOrderRef) {
  const requestedRef = safeText(requestedOrderRef, 50).toUpperCase();
  return ORDER_REF_PATTERN.test(requestedRef)
    ? requestedRef
    : `APB-${crypto.randomBytes(10).toString('hex').toUpperCase()}`;
}

function sanitizeOrder(order) {
  return {
    orderRef: order.orderRef,
    customer: order.customer,
    items: order.items,
    subtotal: order.subtotal,
    shippingFee: order.shippingFee,
    total: order.total,
    status: order.status,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    notes: order.notes,
  };
}

async function readOrdersFile() {
  try {
    const raw = await fs.readFile(ORDERS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function saveOrderToFile(orderRecord) {
  await fs.mkdir(path.dirname(ORDERS_FILE), { recursive: true });
  const existing = await readOrdersFile();
  existing.push(orderRecord);
  await fs.writeFile(ORDERS_FILE, JSON.stringify(existing, null, 2), 'utf8');
  return orderRecord;
}

async function findOrderInFile(orderRef) {
  const existing = await readOrdersFile();
  return existing.find((order) => order.orderRef === orderRef) || null;
}

function validateCustomer(name, phone, email) {
  const normalizedName = safeText(name, 120);
  const normalizedPhone = safeText(phone, 30);
  const normalizedEmail = email ? safeText(email, 254).toLowerCase() : '';

  if (
    !normalizedName ||
    !normalizedPhone ||
    !isValidPhone(normalizedPhone) ||
    !isValidEmail(normalizedEmail)
  ) {
    const error = new Error('Valid name, phone number, and email address are required.');
    error.statusCode = 400;
    throw error;
  }

  return { name: normalizedName, phone: normalizedPhone, email: normalizedEmail || undefined };
}

function validateItems(items) {
  if (!Array.isArray(items) || items.length === 0 || items.length > MAX_ITEMS) {
    const error = new Error('Between one and thirty order items are required.');
    error.statusCode = 400;
    throw error;
  }

  let subtotal = 0;
  const verifiedItems = items.map((item) => {
    const catalogMatch = findCatalogItem(item);
    if (!catalogMatch) {
      const error = new Error('One or more order items are invalid.');
      error.statusCode = 400;
      throw error;
    }

    const quantity = Number(item.quantity);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
      const error = new Error('Each item quantity must be an integer from 1 to 20.');
      error.statusCode = 400;
      throw error;
    }

    subtotal += catalogMatch.price * quantity;
    return {
      bookId: catalogMatch.key,
      name: catalogMatch.en,
      price: catalogMatch.price,
      quantity,
      type: catalogMatch.type,
    };
  });

  return { subtotal, verifiedItems };
}

function createWhatsAppUrl(order) {
  const itemsList = order.items
    .map((item) => `• ${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`)
    .join('\n');
  const message = `*New Order - Adya Pustaka Bhandara*\n\n*Order Ref:* ${order.orderRef}\n*Name:* ${
    order.customer.name
  }\n*Phone:* ${order.customer.phone}\n${
    order.customer.email ? `*Email:* ${order.customer.email}\n` : ''
  }*Address:* ${order.customer.address || 'Not specified'}\n\n*Items:*\n${itemsList}\n\n*Total:* ₹${
    order.total
  }\n\nKindly confirm edition availability, postage, and payment instructions.`;

  return `https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export async function createOrder(input) {
  const { name, phone, email, address, items, orderRef: requestedOrderRef, notes } = input;
  const customer = validateCustomer(name, phone, email);
  const { subtotal, verifiedItems } = validateItems(items);
  const orderRef = createOrderReference(requestedOrderRef);
  const accessToken = createAccessToken();
  const orderPayload = {
    orderRef,
    accessTokenHash: hashAccessToken(accessToken),
    customer: {
      ...customer,
      address: address ? safeText(address, 500) : undefined,
    },
    items: verifiedItems,
    subtotal,
    shippingFee: 0,
    total: subtotal,
    status: 'pending',
    whatsappHandoffSent: true,
    notes: notes ? safeText(notes, 500) : undefined,
  };

  if (mongoose.connection.readyState !== 1) await connectDB();

  let savedOrder;
  let storage = 'mongodb';
  if (mongoose.connection.readyState === 1) {
    savedOrder = await Order.create(orderPayload);
  } else {
    storage = 'local_file';
    savedOrder = await saveOrderToFile({
      ...orderPayload,
      createdAt: new Date().toISOString(),
    });
    console.warn(`[Order] Saved ${orderRef} to the local fallback because MongoDB is offline.`);
  }

  return {
    storage,
    accessToken,
    order: sanitizeOrder(savedOrder),
    whatsappUrl: createWhatsAppUrl(savedOrder),
  };
}

export async function findOrderByAccessToken(orderRef, accessToken) {
  if (!ORDER_REF_PATTERN.test(orderRef) || !accessToken) return null;

  const accessTokenHash = hashAccessToken(accessToken);
  let order = null;
  if (mongoose.connection.readyState === 1) {
    order = await Order.findOne({ orderRef, accessTokenHash }).select('+accessTokenHash').lean();
  }
  if (!order) {
    order = await findOrderInFile(orderRef);
    if (order?.accessTokenHash !== accessTokenHash) return null;
  }

  return sanitizeOrder(order);
}

export async function listOrders() {
  let mongoOrders = [];
  if (mongoose.connection.readyState === 1) {
    mongoOrders = await Order.find({}).sort({ createdAt: -1 }).lean();
  }

  if (mongoOrders.length > 0) {
    return mongoOrders.map(sanitizeOrder);
  }

  const fileOrders = await readOrdersFile();
  return fileOrders
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map(sanitizeOrder);
}

export async function updateOrderStatus(orderRef, status) {
  if (mongoose.connection.readyState === 1) {
    const updated = await Order.findOneAndUpdate(
      { orderRef },
      { status },
      { new: true, runValidators: true }
    ).lean();
    if (updated) return sanitizeOrder(updated);
  }

  const existing = await readOrdersFile();
  const index = existing.findIndex((order) => order.orderRef === orderRef);
  if (index === -1) return null;

  existing[index] = {
    ...existing[index],
    status,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(ORDERS_FILE, JSON.stringify(existing, null, 2), 'utf8');
  return sanitizeOrder(existing[index]);
}
