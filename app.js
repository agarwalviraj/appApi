const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const users = require("./routes/user");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(
  `mongodb+srv://admin:${process.env.DB_PWD}@geny.mbixr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority/`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", (req, res) => {
  res.send("<h1>App hosted at:" + `<a href=./users> /users </a>`);
});

app.use("/users", users);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on sucessfully");
});
