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

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersService();
    res.status(200).json({
      message: 'Order found successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to found order',
      success: false,
      error: error,
    });
  }
};

// get order by id
const getOrderById = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.getOrderByIdService(orderId);

    res.status(200).json({
      message: 'Order found successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Order not found',
      success: false,
      error: error,
    });
  }
};

// get total revenue
const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.getTotalRevenueService();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to find total revenue',
      success: false,
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrderById,
  getTotalRevenue,
};
