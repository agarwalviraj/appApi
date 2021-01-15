const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const products = require("./routes/products");
require("dotenv").config();

app.use(cors());
app.use("*", cors());
app.use(express.json());

// mongoose.connect(
//   `mongodb+srv://admin:${process.env.DB_PWD}@geny.mbixr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority/`,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
mongoose.connect(
  `mongodb+srv://genyDB:${process.env.DB_PWD}@cluster0.vlyq7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("db connected");
  }
);

app.get("/", (req, res) => {
  res.send("<h1>App hosted at: <a href=./products> /products </a>");
});

app.use("/products", products);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on sucessfully");
});
