"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackValidation = void 0;
const zod_1 = require("zod");
//feedback validations
const addFeedbackZodSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: 'Name is required' }).optional(),
    email: zod_1.z.string().email({ message: 'Invalid email' }).optional(),
    feedback: zod_1.z.string().nonempty({ message: 'Feedback is required' }).optional(),
    rating: zod_1.z
        .number()
        .int()
        .min(1)
        .max(5, { message: 'Rating must be between 1 and 5' }).optional(),
});
exports.FeedbackValidation = {
    addFeedbackZodSchema,
};
