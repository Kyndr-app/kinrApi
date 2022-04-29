const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  donations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donation",
  }],
});


const model = mongoose.model("Supporter", mySchema);
module.exports = model;
