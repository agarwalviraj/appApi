const express = require("express");
const app = express();
const schema = require("../model/productSchema");
const geny = schema;
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
app.use(express.json());

app.get("/all", (req, res) => {
  geny.find((err, foundUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.send(foundUsers);
    }
  });
});

app.get("/name/:uuid", (req, res) => {
  geny.findOne({ uuid: req.params.uuid }, (err, foundUser) => {
    if (err) console.error(err);
    else res.send(foundUser);
  });
});

app.post("/add", async (req, res) => {
  const data = new geny({
    uuid: uuidv4(),
    name: req.body.name,
    quantity: req.body.quantity,
  });
  // res.json(data);
  try {
    const doc = await data.save();
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.json(err);
  }
  // res.send("hello");
});

app.patch("/update", (req, res) => {
  geny.updateOne(
    { uuid: req.body.uuid },
    { quantity: req.body.quantity },
    (err) => {
      if (err) {
        console.error(err);
      } else {
        res.send("sucessfully updated");
      }
    }
  );
});

app.delete("/delete", (req, res) => {
  geny.deleteOne({ uuid: req.body.uuid }, function (err) {
    if (err) console.error(err);
    else res.send("Successfully deleted");
  });
});

module.exports = app;
