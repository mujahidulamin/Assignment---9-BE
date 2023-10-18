import { z } from 'zod';


//feedback validations


const addFeedbackZodSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }).optional(),
  email: z.string().email({ message: 'Invalid email' }).optional(),
  feedback: z.string().nonempty({ message: 'Feedback is required' }).optional(),
  rating: z
    .number()
    .int()
    .min(1)
    .max(5, { message: 'Rating must be between 1 and 5' }).optional(),
});

export const FeedbackValidation = {
  addFeedbackZodSchema,
};