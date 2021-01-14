const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const users = require("./routes/user");
require("dotenv").config();

app.use(cors());
app.use("*", cors());

mongoose.connect(
  `mongodb+srv://admin:${process.env.DB_PWD}@geny.mbixr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority/`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/users", users);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on sucessfully");
});
