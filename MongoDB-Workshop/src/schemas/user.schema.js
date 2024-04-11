import joi from "joi";

export const userSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  age: joi.number().min(18).required(),
  email: joi.string().required(),
  country: joi.number().required(),
  orders: joi.array().items(joi.string()),
});