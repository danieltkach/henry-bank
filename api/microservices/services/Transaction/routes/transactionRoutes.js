const express = require('express')
const server = express.Router()

const transactionController = require('../controllers/transactionConrtroller')

server.get('/transfers/:id', transactionController.getTranfers)

server.get('/incomes/:id', transactionController.getIncomes)

server.get('/incomesByDate/:id', transactionController.getIncomesByDate)

server.post('/transfer', transactionController.createTransfer)

module.exports = server