/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';


//service interface

export type IService = {
  name: string;
  price: number;
  description: string;
  availability: boolean;
  image_url: string;
  rating: number;
  is_upcoming?: boolean;
  category_id: string;
};

export type ServiceModel = Model<IService, Record<string, unknown>>;

export type IServiceFilters = {
  searchTerm?: string;
  id?: string;
  name?: string;
  description?: string;
};