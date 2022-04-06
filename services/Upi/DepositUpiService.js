
require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

class DepositUpiService   {
  constructor() {}

  async deposit() {
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });

      const options = {
        amount: 50000, // amount in smallest currency unit
        currency: "INR",
        receipt: "receipt_order_74394",
      };

      const order = await instance.orders.create(options);

      if (!order) return "There is no order";
      return order;
    } catch (error) {
      return error;
    }
  }
}

module.exports = DepositUpiService;
