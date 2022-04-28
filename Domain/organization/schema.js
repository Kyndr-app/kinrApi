const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
      type: String,
      unique: true
  },
  team_members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeamMember",
  }],
  campaings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaing",
  }],
});

const model = mongoose.model("Organization", mySchema);
module.exports = model;


