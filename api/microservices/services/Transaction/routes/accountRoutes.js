const express = require('express')
const server = express.Router()

const accountController = require('../controllers/accountController')

server.get('/:id', accountController.getBalance)

module.exports = server