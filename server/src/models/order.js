import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  bookId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 1 },
  type: { type: String, enum: ['physical', 'digital', 'both'], default: 'physical' },
});

const orderSchema = new mongoose.Schema(
  {
    orderRef: { type: String, required: true, unique: true, index: true },
    accessTokenHash: { type: String, required: true, select: false },
    customer: {
      name: { type: String, required: true },
      phone: { type: String, required: true, index: true },
      email: { type: String },
      address: { type: String },
    },
    items: {
      type: [orderItemSchema],
      validate: {
        validator: (value) => Array.isArray(value) && value.length > 0,
        message: 'Order must contain at least one item.',
      },
    },
    subtotal: { type: Number, required: true, min: 0 },
    shippingFee: { type: Number, default: 0, min: 0 },
    total: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    whatsappHandoffSent: { type: Boolean, default: false },
    notes: { type: String },
  },
  { timestamps: true }
);

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
