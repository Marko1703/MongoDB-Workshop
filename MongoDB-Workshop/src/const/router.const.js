import { Router } from "express";
import { productRouter } from "../routes/product.route.js";
import { orderRouter } from "../routes/order.route.js";
import { userRouter } from "../routes/user.route.js";

export const globalRouter = Router();

globalRouter.use("/products", productRouter);
globalRouter.use("/orders", orderRouter);
globalRouter.use("/users", userRouter);