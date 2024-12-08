import { IBike, UpdateBikeData } from './bike.interface';
import { BikeModel } from './bike.model';

// create bike service
const createBikeService = async (bike: IBike) => {
  const result = await BikeModel.create(bike);

  return result;
};

// get all bike services
const getAllBikesService = async () => {
  const result = await BikeModel.find({});

  return result;
};

// get bike by id service
const getBikeByIdService = async (productId: string) => {
  const result = await BikeModel.findOne({ _id: productId });

  return result;
};

// delete bike by id service
const deleteBikeByIdService = async (productId: string) => {
  const result = await BikeModel.deleteOne({ _id: productId });

  return result;
};

// update bike by id service
const updateBikeByIdService = async (
  productId: string,
  updateData: UpdateBikeData,
) => {
  const updatedBike = await BikeModel.findByIdAndUpdate(
    productId,
    { $set: updateData }, // Update only specified fields
    { new: true }, // Return the updated document
  );
  return updatedBike;
};

export const BikeServices = {
  createBikeService,
  getAllBikesService,
  getBikeByIdService,
  deleteBikeByIdService,
  updateBikeByIdService,
};
