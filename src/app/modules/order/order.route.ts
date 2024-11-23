import express from 'express';
import { OrderControllers } from './order.controller';
const router = express.Router();

router.post('/create-order', OrderControllers.createOrder);
router.get('/get-order', OrderControllers.getAllOrders);
router.get('/revenue', OrderControllers.getTotalRevenue);

router.get('/:orderId', OrderControllers.getOrderById);

export const OrderRoutes = router;
