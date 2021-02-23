const express = require('express')
const server = express.Router()

const transactionController = require('./transactionController')

server.get('/', transactionController.getTransactions)

module.exports = server