const express = require("express");
const router = express.Router();
const DepositUpiService = require("../Services/Upi/DepositUpiService");
const depositService = new DepositUpiService();


router.post("/", async (req, res) => {
  const depositInfo = await depositService.deposit(req.body.amount);
  res.json(depositInfo);
});

module.exports = router;
