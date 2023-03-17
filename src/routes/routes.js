const express = require("express")
const controller = require("../controllers/controller")

const routes = express.Router()

routes.post('/api/prompt', controller.sendText)

module.exports = routes