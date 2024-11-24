import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { BikeRoutes } from './app/modules/bike/bike.route';
import { OrderRoutes } from './app/modules/order/order.route';

// parser
app.use(express.json());
app.use(cors());

// application routing
app.use('/api', BikeRoutes);
app.use('/api', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome! you have successfully run this application.');
});

export default app;
