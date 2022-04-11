const express = require("express");
const router = express.Router();
const controller = require("./controller");



router.post("/", async (req, res) => {
    const paymentSuccess = await controller.checkTransaction(req.body);
    console.log(paymentSuccess)
    res.json(paymentSuccess);
  
  
});

module.exports = router;
