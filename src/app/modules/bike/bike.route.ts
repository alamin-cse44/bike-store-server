import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

// call controller
router
  .post('/create-bike', BikeControllers.createBike)
  .get('/get-bikes', BikeControllers.getAllBikes);

export const BikeRoutes = router;
