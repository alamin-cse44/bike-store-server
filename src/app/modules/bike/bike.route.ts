import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

// call controller
router.post('/create-bike', BikeControllers.createBike);
router.get('/get-bikes', BikeControllers.getAllBikes);

router
  .route('/:bikeId')
  .get(BikeControllers.getBikeById)
  .delete(BikeControllers.deleteBikeById)
  .put(BikeControllers.updateBikeById);

export const BikeRoutes = router;
