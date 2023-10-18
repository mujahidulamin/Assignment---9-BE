import { Model } from 'mongoose';

//feedback interface


export type IFeedback = {
  name: string;
  email: string;
  feedback: string;
  rating: number;
};

export type FeedbackModel = Model<IFeedback, Record<string, unknown>>;
