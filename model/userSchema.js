const mongoose = require("mongoose");
const schema = {
  uuid: { type: "string", unique: true },
  name: "string",
  points: "Number",
};

module.exports = mongoose.model("user", schema);
