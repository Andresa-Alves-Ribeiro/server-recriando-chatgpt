"use strict";

var express = require("express");
var controller = require("../controllers/controller");
var routes = express.Router();
routes.post('/api/prompt', controller.sendText);
module.exports = routes;