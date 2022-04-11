const express = require("express");

const CheckTransactionService = require("../../services/Upi/CheckTransactionService");

const checkTransactionService = new CheckTransactionService();
require("dotenv").config();

async function checkTransaction(data) {
  
  return await checkTransactionService.checkTransaction(data);
}

module.exports = {
  checkTransaction,
};
