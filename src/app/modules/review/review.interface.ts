import { Model } from 'mongoose';

//review interface

export type IReview = {
  user_id: string;
  service_id: string;
  comment: string;
  rating: number;
};

export type ReviewModel = Model<IReview, Record<string, unknown>>;