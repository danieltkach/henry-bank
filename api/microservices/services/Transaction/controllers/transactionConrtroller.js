const Transaction = require('./TransactionModel')

const getTransactions = (req,res) => {
    Transaction.find()
    .then(resp => {
        res.status(200).json({
            ok: true,
            resp
        })
    })
    .catch(error => {
        res.status(400).json(error)
    })
}

module.exports= {
    getTransactions,
}