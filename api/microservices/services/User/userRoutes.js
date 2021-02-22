const express = require('express')
const server = express.Router()

const userController = require('./userController')

server.get('/', userController.getUsers)

module.exports = server