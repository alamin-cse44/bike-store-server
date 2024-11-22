import { IBike } from './bike.interface';
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
const getBikeByIdService = async (bikeId: string) => {
  const result = await BikeModel.findOne({ _id: bikeId });

  return result;
};

// delete bike by id service
const deleteBikeByIdService = async (bikeId: string) => {
  const result = await BikeModel.deleteOne({ _id: bikeId });

  return result;
};

export const BikeServices = {
  createBikeService,
  getAllBikesService,
  getBikeByIdService,
  deleteBikeByIdService,
};
