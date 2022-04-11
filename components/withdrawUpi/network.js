const Web3 = require("web3");
const axios = require("axios");

const express = require("express");
const router = express.Router();

const WithdrawUpiService = require('../../services/Upi/WithdrawUpiService');
const service = new WithdrawUpiService();


router.post("/", async (req, res) => {
  const withdrawInfo = service.deposit();
  res.json(withdrawInfo);
  
});

module.exports = router;
