const express = require("express");
const app = express();
const schema = require("../model/productSchema");
const addProduct = require("../model/addProduct");
const geny = schema;

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

app.post("/add", (req, res) => {
  const newProduct = new geny(addProduct(req));

  newProduct.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Successfully added");
    }
  });
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
    else console.log("Successfully deleted");
  });
});

module.exports = app;
