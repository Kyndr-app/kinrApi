const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./Routes/index");

const db = require("mongoose");
const dbUrl = `mongodb+srv://${process.env.USER_DB}:${process.env.PWD_USER_DB}@kyndr.04qiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
router(app);

db.Promise = global.Promise;

db.connect(dbUrl, {
  useNewUrlParser: true,
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Running on port ${port}`);
});
