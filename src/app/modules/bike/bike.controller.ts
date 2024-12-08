import { Request, Response } from 'express';
import { BikeServices } from './bike.service';
import { UpdateBikeData } from './bike.interface';

// create a bike controller
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

// get all bike controllers
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

// get bike by id controller
const getBikeById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await BikeServices.getBikeByIdService(productId);

    res.status(200).json({
      message: 'Single Bike retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Bike not found',
      success: false,
      error: error,
    });
  }
};

// delete a bike by id controller
const deleteBikeById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await BikeServices.deleteBikeByIdService(productId);

    res.status(200).json({
      message: 'Bike deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete bike',
      success: false,
      error: error,
    });
  }
};

// update a bike by id controller
const updateBikeById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData: UpdateBikeData = req.body;
    const updatedBike = await BikeServices.updateBikeByIdService(
      productId,
      updateData,
    );

    // if (!updatedBike) {
    //     return res.status(404).json({
    //       message: 'Bike not found',
    //       success: false,
    //     });
    // }

    res.status(200).json({
      message: 'Bike updated successfully',
      success: true,
      data: updatedBike,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update bike',
      success: false,
      error: error,
    });
  }
};

export const BikeControllers = {
  createBike,
  getAllBikes,
  getBikeById,
  deleteBikeById,
  updateBikeById,
};
