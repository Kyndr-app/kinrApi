const express = require("express");
const router = express.Router();

const WithdrawUpiService = require("../Services/Upi/WithdrawUpiService");
const witdrawService = new WithdrawUpiService();

router.post("/", async (req, res) => {

  res.send(await witdrawService.withdraw());
});

module.exports = router;
