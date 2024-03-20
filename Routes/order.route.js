const express = require("express");
const { OrderModel } = require("../Model/order.model");

const orderRouter = express.Router();






orderRouter.post("/order", async (req, res) => {
    try {
      
      const { userID, booksID, totalAmount } = req.body;
  
      
      const order = new OrderModel({
        user: userID,
        books: booksID,
        totalAmount: totalAmount,
      });
  
      await order.save();
  
      res.status(201).json(order);
    } catch (error) {
      console.error("Error placing order:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  orderRouter.get("/orders", async (req, res) => {
    try {
     
      const orders = await OrderModel.find()
        .populate("user", "-password") 
        .populate("books");
  
      res.json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
})












module.exports={
    orderRouter
}