const express = require("express");
const deposit = require("./routes/deposit");
const deposit = require("./routes/withdraw");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: "",
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use(express.json());
app.use("/deposit", kinr);
//creates routes for deposites, withdraw.


app.listen(port, "0.0.0.0", () => {
  console.log(`Running on port ${port}`);
});
