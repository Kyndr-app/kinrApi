const moongose = require("mongoose");

const Schema = moongose.Schema;

const mySchema = new Schema({
  lastname: String,
});

const model = moongose.model("Supporter", mySchema);
module.exports = model;
