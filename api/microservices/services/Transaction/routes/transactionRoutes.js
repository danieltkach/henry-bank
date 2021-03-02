const express = require('express')
const server = express.Router()

const transactionController = require('../controllers/transactionConrtroller')

server.get('/transfers/:id', transactionController.getTranfers)

server.get('/incomes/:id', transactionController.getIncomes)

server.get('/incomesByDate/:id/:start/:end', transactionController.getIncomesByDate)

server.post('/transfer', transactionController.createTransfer)

server.put('/transfer/recharge', transactionController.rapiTransfer)

server.put('/newTransfer/:idSender' , transactionController.newTransaction)

module.exports = server