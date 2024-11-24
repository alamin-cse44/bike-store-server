import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

// call controller
router
  .route('/bikes')
  .post(BikeControllers.createBike)
  .get(BikeControllers.getAllBikes);

router
  .route('/bikes/:bikeId')
  .get(BikeControllers.getBikeById)
  .delete(BikeControllers.deleteBikeById)
  .put(BikeControllers.updateBikeById);

export const BikeRoutes = router;
