import { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            min: 18,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                // validator property takes the value of the field as an argument and returns true or false
                validator: value => validator.isEmail(value),
                // If validator fails then we get the error in the message property which is used to return an error to the user
                message: error => `${error.value} is not a valid email`,
              },
        },
        country: {
            type: String,
            required: true,
        },
        orders: [
            {
                type: Schema.Types.ObjectId,
                //   ref needs to point to the model name we used when creating student model
                ref: "Order",
            },
        ],
    }
);

export const User = model("User", userSchema);