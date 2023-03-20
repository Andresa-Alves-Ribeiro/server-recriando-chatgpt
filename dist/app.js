"use strict";

var express = require("express");
var cors = require("cors");
var routes = require("./routes/routes");
require('dotenv').config();
var app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
module.exports = app;