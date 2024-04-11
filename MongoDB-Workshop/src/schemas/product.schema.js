import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().min(2).required(),
  stock: joi.number().min(0).required(),
  description: joi.string().min(20).max(200).required(),
  category: joi.string().required(),
  price: joi.number().required(),
  rating: joi.number().min(1).max(5).required(),
});