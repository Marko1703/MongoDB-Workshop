import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  date: {
    type: String,
    requred: true,
  },
  user: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      //   ref needs to point to the model name we used when creating product model
      ref: "Product",
    },
  ],
});

export const Order = model("Order", orderSchema);