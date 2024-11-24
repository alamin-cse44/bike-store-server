import express from 'express';
import { OrderControllers } from './order.controller';
const router = express.Router();

router
  .route('/orders')
  .post(OrderControllers.createOrder)
  .get(OrderControllers.getAllOrders);

router.get('/orders/revenue', OrderControllers.getTotalRevenue);

router.get('/orders/:orderId', OrderControllers.getOrderById);

export const OrderRoutes = router;
