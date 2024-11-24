import { model, Schema } from 'mongoose';
import { IBike } from './bike.interface';

const bikeSchema = new Schema<IBike>(
  {
    name: {
      type: String,
      required: [true, 'Bike name must be provided'],
      unique: true,
      trim: true,
      minlength: [3, 'Bike name must be at least 3 characters'],
      maxlength: [30, 'Bike name must not exceed 30 characters'],
    },
    brand: {
      type: String,
      required: [true, 'Brand name must be provided'],
      trim: true,
      minlength: [3, 'Brand name must be at least 3 characters'],
      maxlength: [30, 'Brand name must not exceed 30 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Price must be provided'],
      validate: {
        validator: (value: number) => value > 0,
        message: 'The bike price must be a positive number',
      },
    },
    category: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message:
          "The bike category must be one of the following: 'Mountain', 'Road', 'Hybrid', 'Electric'",
      },
      required: [true, 'Please enter a valid category'],
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Please the quantity of the bike'],
      validate: {
        validator: (value: number) => value >= 0,
        message: 'The bike quantity must be a non-negative number',
      },
    },
    inStock: {
      type: Boolean,
      required: true,
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

export const BikeModel = model<IBike>('Bike', bikeSchema);
