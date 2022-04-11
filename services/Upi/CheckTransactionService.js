const crypto = require("crypto");

class CheckTransactionService {
  constructor() {}

  async checkTransaction(data) {
    try {
      // getting the details back from our font-end
      console.log("payment sucess try");
      const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      } = data;

      // Creating our own digest
      // The format should be like this:
      // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
      const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);

      shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

      const digest = shasum.digest("hex");
      console.log(digest === razorpaySignature, digest, razorpaySignature);
      // comaparing our digest with the actual signature
      if (digest !== razorpaySignature)
        return res.status(400).json({ msg: "Transaction not legit!" });

      // THE PAYMENT IS LEGIT & VERIFIED
      // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

      return {
        msg: "success",
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = CheckTransactionService;
