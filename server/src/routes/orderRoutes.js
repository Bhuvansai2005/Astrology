import express from 'express';
import { createOrderController, getOrderController } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrderController);
router.get('/:orderRef', getOrderController);

export default router;
