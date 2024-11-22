import express from 'express';
import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrderService(order);
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create order',
      success: false,
      error: error,
    });
  }
};


export const OrderControllers = {
  createOrder,
};
