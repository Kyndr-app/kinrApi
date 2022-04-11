const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", async (req, res) => {
  const depositInfo = await controller.deposit(req.body.amount);
  res.json(depositInfo);


    // const txHash = await controller.mintKirn(
  //   req.body.address,
  //   req.body.amount
  // );
});

module.exports = router;
