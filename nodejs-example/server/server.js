var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var cors = require('cors')
var express = require("express");
var users = require("../common/models/users.js");

var app = express();
app.use(cors());

app.get("/", function(request, response){
  response.send("hello!");
});

app.get("/hello/:text", function(request, response) {
  response.send("Hello " + request.params.text);
});

app.get("/users/", function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(users.get());
});

console.log("Server running: listen in "+host+":"+port);

app.listen(port, host);