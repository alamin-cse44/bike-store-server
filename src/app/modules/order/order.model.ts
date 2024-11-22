import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';
import validator from 'validator';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Customer email must be provided'],
      trim: true,
      validate: {
        validator: (email: string) => validator.isEmail(email),
        message: 'Please provide a valid email address',
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Bike', // Refers to the Bike model
      required: [true, 'Product must be provided'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please specify the quantity of the bike'],
      validate: {
        validator: (value: number) => value > 0,
        message: 'The quantity must be a positive number',
      },
    },
    totalPrice: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => value > 0,
        message: 'The total price must be a positive number',
      },
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel = model<IOrder>('Order', orderSchema);
