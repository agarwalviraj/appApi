const { v4: uuidv4 } = require("uuid");
function addUser(req) {
  return {
    uuid: uuidv4(),
    name: req.body.name,
    points: req.body.pts,
  };
}

module.exports = addUser;
