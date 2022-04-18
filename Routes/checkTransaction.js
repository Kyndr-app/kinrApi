const express = require("express");
const router = express.Router();

const MintKinrService = require("../Services/Kinr/MintKinrService");
const BurnKinrService = require("../Services/Kinr/BurnKinrService");
const CheckTransactionService = require("../Services/Upi/CheckTransactionService");
const mintService = new MintKinrService();
const burnService = new BurnKinrService();
const checkTransactionService = new CheckTransactionService();

router.post("/", async (req, res) => {
    const upi = await checkTransactionService.checkTransaction(req.body)
  const paymentSuccess = {
    upi: upi,
    blockchain:
      upi.transactionType === "deposit"
        ? await mintService.mintKinr(req.body.amount, req.body.address)
        : await burnService.burnFromKinr(req.body.amount, req.body.address),
  };
  if (
    paymentSuccess.upi.transactionType === "deposit" &&
    paymentSuccess.upi.msg === "success"
  ) {
    console.log("check on payment success:", paymentSuccess);
    res.json(paymentSuccess);
  } else if (
    paymentSuccess.upi.transactionType === "withdraw" &&
    paymentSuccess.upi.msg === "success"
  ) {
    res.json(paymentSuccess);
  } else {
    res.json(paymentSuccess);
  }
});

module.exports = router;
