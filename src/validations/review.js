import Joi from "joi";

export const validateReview = review => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(35).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(2).max(15).required(),
    cv: Joi.string(),
    description: Joi.string().required().min(6).max(3500),
  });
  return schema.validate(review);
};
