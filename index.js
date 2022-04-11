const express = require("express");
const cors = require("cors");
require('dotenv').config()
const router = require("./network/routes");


const app = express();
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
router(app);

app.listen(port, "0.0.0.0", () => {
  console.log(`Running on port ${port}`);
});
