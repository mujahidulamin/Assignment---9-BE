import { Schema, model } from 'mongoose';
import { IService, ServiceModel } from './service.interface';

//service model


const serviceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    availability: { type: Boolean, default: true },
    image_url: { type: String, required: true },
    rating: { type: Number, default: 0 },
    is_upcoming: { type: Boolean, default: false },
    category_id: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Service = model<IService, ServiceModel>('Service', serviceSchema);
