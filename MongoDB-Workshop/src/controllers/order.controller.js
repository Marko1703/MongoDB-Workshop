import { orderSchema } from "../schemas/order.schema.js";
import { OrderService } from "../services/order.service.js";

export class OrderController {
  //1.Get all orders
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();

      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  }
  //2. Get order by id
  static async getOrderById(req, res) {
    try {
      const orders = await OrderService.getOrdersById(req.params.id);

      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
  //3. Create order
  static async createOrder(req, res) {
    try {
      await orderSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      const createdOrder = await OrderService.createOrder(req.body);

      res.status(201).json(createdOrder);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
  // 4. Update Order
  static async updateOrder(req, res) {
    try {
      await updateOrderSchema.validateAsync(req.body);

      const updatedOrder = await OrderService.updateOrder(
        req.params.id,
        req.body
      );

      res.json(updatedOrder);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
  //5. Delete Order
  static async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req.params.id);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
}