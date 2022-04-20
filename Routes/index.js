const express = require("express");
const deposit = require("./deposit");
const withdraw = require("./withdraw");
const checkTransaction = require("./checkTransaction");

const supporters = require("./supporters");
const beneficiaries  = require("./beneficiaries");
const team_members  = require("./team_members");

const routes = function (server) {
  server.use("/deposit", deposit);
  server.use("/withdraw", withdraw);
  server.use("/checkTransaction", checkTransaction);
  server.use("/supporters", supporters);
  server.use("/beneficiaries", beneficiaries);
  server.use("/team_members", team_members);
};

module.exports = routes;
