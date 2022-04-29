const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  location: {
    type: String,
  },
  raise_goal: {
    type: Number,
  },

  profile_image: {
    type: String,
  },

  baner_img: {
    type: String,
  },
  supporting_img: {
    type: [String],
  },

  story: {
    type: String,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },

  donations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donation",
  }],
});

const model = mongoose.model("Campaing", mySchema);
module.exports = model;
