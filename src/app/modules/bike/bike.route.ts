import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

// call controller
router
  .route('/products')
  .post(BikeControllers.createBike)
  .get(BikeControllers.getAllBikes);

router
  .route('/products/:productId')
  .get(BikeControllers.getBikeById)
  .delete(BikeControllers.deleteBikeById)
  .put(BikeControllers.updateBikeById);

export const BikeRoutes = router;
