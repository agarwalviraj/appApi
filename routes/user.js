const express = require("express");
const app = express();
const schema = require("../model/userSchema");
const addUser = require("../model/addUser");
const geny = schema;

app.get("/", (req, res) => {
  geny
    .find((err, foundUsers) => {
      if (err) {
        console.log(err);
      } else {
        res.send(foundUsers);
      }
    })
    .limit(parseInt(req.query.amt));
});

app.get("/:uuid", (req, res) => {
  geny.findOne({ uuid: req.params.uuid }, (err, foundUser) => {
    if (err) console.error(err);
    else res.send(foundUser);
  });
});

app.post("/", (req, res) => {
  const newUser = new geny(addUser(req));

  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Successfully added");
    }
  });
});

app.patch("/:uuid/:points", (req, res) => {
  geny.updateOne(
    { uuid: req.params.uuid },
    { points: req.params.points },
    (err) => {
      if (err) {
        console.error(err);
      } else {
        res.send("sucessfully updated");
      }
    }
  );
});

module.exports = app;
