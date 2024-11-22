import { Request, Response } from 'express';
import { BikeServices } from './bike.service';

const createBike = async (req: Request, res: Response) => {
  try {
    const bike = req.body;
    const result = await BikeServices.createBikeService(bike);

    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create bike',
      success: false,
      error: error,
    });
  }
};

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const bikes = await BikeServices.getAllBikesService();
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      success: true,
      data: bikes,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve bikes',
      success: false,
      error: error,
    });
  }
};

const getBikeById = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;

    const result = await BikeServices.getBikeByIdService(bikeId);

    res.status(200).json({
      message: 'Single Bike retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve bike',
      success: false,
      error: error,
    });
  }
};

export const BikeControllers = {
  createBike,
  getAllBikes,
  getBikeById,
};
