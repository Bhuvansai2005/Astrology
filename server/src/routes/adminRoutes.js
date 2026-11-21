import express from 'express';
import {
  createAdminSession,
  requireAdmin,
  verifyAdminPassword,
} from '../middleware/adminAuth.js';
import { listOrders, updateOrderStatus } from '../services/orderService.js';

const router = express.Router();

router.post('/login', (req, res, next) => {
  try {
    verifyAdminPassword(req.body?.password);
    res.json({ token: createAdminSession() });
  } catch (error) {
    next(error);
  }
});

router.get('/orders', requireAdmin, async (req, res, next) => {
  try {
    res.json({ orders: await listOrders() });
  } catch (error) {
    next(error);
  }
});

router.patch('/orders/:orderRef/status', requireAdmin, async (req, res, next) => {
  try {
    const status = req.body?.status;
    const allowed = ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ error: 'Invalid order status.' });
    }

    const order = await updateOrderStatus(req.params.orderRef, status);
    if (!order) return res.status(404).json({ error: 'Order not found.' });
    return res.json({ order });
  } catch (error) {
    return next(error);
  }
});

export default router;
