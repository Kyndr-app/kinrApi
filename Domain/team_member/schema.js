const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  permissions: {
    type: String,
    enum: ["CampaignLead", "CampaignEditor", "FundAccess"],
    default: "CampaignEditor",
  },
  designation: {
    type: String
  },
  state: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const model = mongoose.model("TeamMember", mySchema);
module.exports = model;
