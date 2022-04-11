const express = require("express");
const deposit = require("../components/depositUpi/network");
const withdraw = require("../components/withdrawUpi/network");
const checkTransaction = require("../components/checkTransactionUpi/network");

const routes = function (server) {
  server.use("/deposit", deposit);
  server.use("/withdraw", withdraw);
  server.use("/checkTransaction", checkTransaction);
};

module.exports = routes;
