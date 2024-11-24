import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';
import validator from 'validator';
import { IBike } from '../bike/bike.interface';

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
        validator: (value: number) => value >= 0,
        message: 'The total price must be a positive number',
      },
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v; // Remove the __v field
        return ret;
      },
    },
    toObject: {
      transform(doc, ret) {
        delete ret.__v; // Remove the __v field
        return ret;
      },
    },
  },
);

orderSchema.pre('save', async function (next) {
  const product = (await this.model('Bike').findById(
    this.product,
  )) as IBike | null;
  if (!product) {
    const error = new Error('Product not found');
    error.name = 'NotFoundError! Product not found';
    return next(error);
  }
  // Check if there is sufficient stock
  if (product.quantity < this.quantity) {
    const error = new Error('');
    error.name = 'StockError! Insufficient stock for the requested quantity';
    return next(error);
  }

  // Deduct the ordered quantity from the bike stock
  product.quantity -= this.quantity;

  // update the totalPrice
  this.totalPrice = product.price * this.quantity;

  if (product.quantity === 0) {
    product.inStock = false;
  }
  // Update the stock in the database
  await product.save();
  next();
});

export const OrderModel = model<IOrder>('Order', orderSchema);
