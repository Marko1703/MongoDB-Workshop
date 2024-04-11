import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 2,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 200,
    },
    category: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model("Product", productSchema);