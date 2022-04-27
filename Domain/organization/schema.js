const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
      type: String
  },
  team_members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeamMember",
  }],
  campaigns: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaign",
  }],
});

const model = mongoose.model("Organization", mySchema);
module.exports = model;


