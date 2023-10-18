import { Model } from 'mongoose';


//faq interface


export type IFaq = {
  question: string;
  answer: string;
};

export type FaqModel = Model<IFaq, Record<string, unknown>>;

export type IFaqFilters = {
  searchTerm?: string;
  id?: string;
  question?: string;
  answer?: string;
};
