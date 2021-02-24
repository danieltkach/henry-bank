const express = require('express')
const server = express.Router()

const transactionController = require('../controllers/transactionConrtroller')

server.get('/', transactionController.getTransactions)

module.exports = server