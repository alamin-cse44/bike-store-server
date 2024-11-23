import { Types, Document } from 'mongoose';

export interface IOrder extends Document {
  email: string;
  product: Types.ObjectId; // Reference to the Bike model
  quantity: number;
  totalPrice: number; // Calculated as product price * quantity
}
