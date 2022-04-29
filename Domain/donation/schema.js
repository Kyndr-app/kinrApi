const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  txHash: {
    type: String,
    unique: true,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  comment: {
    type: String,
  },
  date: {
    type: Date,
  },
  campaing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaing",
  },
  supporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supporter",
  },

});

const model = mongoose.model("Donation", mySchema);
module.exports = model;
