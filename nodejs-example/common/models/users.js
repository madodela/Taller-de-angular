function getUsers(){
  var fs = require("fs");
  var users = { data: JSON.parse(fs.readFileSync("mockdata/users.json")) };
  return users;
}
module.exports.get = getUsers;