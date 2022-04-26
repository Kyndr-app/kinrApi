const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  email: String,
  user_name: { type : String , unique : true, required : true},
  password: String,
  phone_number: String,
  first_name: String,
  last_name: String,
  pan_id: String,
  wallet_addres: String,
  wallet_private_key: String,
  profile_img: String, //a reference to an s3 instance
  upi_id: String,
});

const model = mongoose.model("User", mySchema);

module.exports = model;
