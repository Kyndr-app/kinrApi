const express = require("express");
const deposit = require("./deposit");
const withdraw = require("./withdraw");
const checkTransaction = require("./checkTransaction");

const supporters = require("./supporters");

const routes = function (server) {
  server.use("/deposit", deposit);
  server.use("/withdraw", withdraw);
  server.use("/checkTransaction", checkTransaction);
  server.use("/supporters", supporters);
};

module.exports = routes;
