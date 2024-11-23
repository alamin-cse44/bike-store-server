import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

// create a new order service
const createOrderService = async (order: IOrder) => {
  const result = await OrderModel.create(order);

  return result;
};

// get all orders
const getAllOrdersService = async () => {
  const result = await OrderModel.find().populate({
    path: 'product',
    select: 'name price',
  });

  return result;
};

// get order by id with populate
const getOrderByIdService = async (orderId: string) => {
  const result = await OrderModel.findById(orderId).populate({
    path: 'product',
  });
  return result;
};

export const OrderServices = {
  createOrderService,
  getAllOrdersService,
  getOrderByIdService,
};
