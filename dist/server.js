"use strict";

var app = require("./app.js");
var port = process.env.PORT;
app.listen(port, function () {
  console.log("Server ".concat(port));
});