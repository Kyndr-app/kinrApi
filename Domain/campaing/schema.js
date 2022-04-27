const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  raise_goal: {
    type: int,
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
});

const model = mongoose.model("Organization", mySchema);
module.exports = model;
