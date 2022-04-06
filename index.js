const express = require("express");
const deposit = require("./routes/depositUpi");
const withdraw = require("./routes/withdrawUpi");
const paymentSucess = require("./routes/paymentSucessUpi");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use(express.json());
app.use("/deposit", deposit);
app.use("/withdraw", withdraw);
app.use("/paymentSucess", paymentSucess);


app.listen(port, "0.0.0.0", () => {
  console.log(`Running on port ${port}`);
});
