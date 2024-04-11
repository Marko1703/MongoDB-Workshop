import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

export class OrderService {
  //1. Get all orders
  static async getAllOrders() {
    const orders = await Order.find({});

    return orders;
  }
  //2. Get order by id
  static async getOrderById(orderId) {
    // Populate takes a property and if it finds a reference to another collection it fetches the data and populates the documents
    const foundOrder = await Order.findById(orderId).populate({
      path: "products",
      model: Product,
    });

    if (!foundOrder) throw new Error("Order Not Found");

    return foundOrder;
  }
  //3. Create Order
  static async createOrder(orderData) {
    const newOrder = new Order(orderData);

    const createdOrder = await newOrder.save();

    return createdOrder;
  }
  //4. Update order
  static async updateOrder(orderId, updateData) {
    const foundOrder = await this.getOrderById(orderId);

    // Object assign takes the target object and addes the properties of the second object to it
    Object.assign(foundOrder, updateData);

    //Saving after updates validates the data before writing it to the database
    const updatedOrder = await foundOrder.save();

    return updatedOrder;
  }
  //5. Delete Order
  static async deleteOrder(orderId) {
    const response = await Order.findByIdAndDelete(orderId);

    if (!response) throw new Error("Order not found");

    console.log(response);
  }
}