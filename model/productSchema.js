const mongoose = require("mongoose");
const schema = {
  uuid: { type: "string", unique: true },
  name: { type: "string", required: true, unique: true },
  quantity: { type: "Number", required: true },
  group: { type: "Number", required: true },
};

module.exports = mongoose.model("user", schema);
