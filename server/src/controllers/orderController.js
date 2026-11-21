import { createOrder, findOrderByAccessToken } from '../services/orderService.js';

export async function createOrderController(req, res, next) {
  try {
    const result = await createOrder(req.body);
    res.status(201).json({
      message:
        result.storage === 'mongodb'
          ? 'Order created and saved in MongoDB.'
          : 'Order created and saved locally (MongoDB offline).',
      ...result,
    });
  } catch (error) {
    next(error);
  }
}

export async function getOrderController(req, res, next) {
  try {
    const order = await findOrderByAccessToken(req.params.orderRef, req.query.accessToken);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    return res.json({ order });
  } catch (error) {
    return next(error);
  }
}
