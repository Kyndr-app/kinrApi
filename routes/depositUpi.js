const Web3 = require("web3");
const axios = require("axios");



const express = require("express");
const router = express.Router();

const DepositUpiService = require('../services/Upi/DepositUpiService');
const service = new DepositUpiService();


router.post("/", async (req, res) => {
  const depositInfo = await service.deposit();
  console.log(depositInfo);
  res.json(depositInfo);
  
});

module.exports = router;
