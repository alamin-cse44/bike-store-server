import express from 'express';
import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

// create a new order service
const createOrderService = async (order: IOrder) => {
  const result = await OrderModel.create(order);

  return result;
};

export const OrderServices = {
  createOrderService,
};
