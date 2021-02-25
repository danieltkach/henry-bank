const Transaction = require('../models/TransactionModel')


const getTranfers = (req,res) =>{

    Transaction.find({idSenderAccount : req.params.id , transactionType:'transfer'} , function(err,data){
        if(err) res.status(400).send('Sin transferencias')
        let total = 0;
        data.forEach(transfer =>  total += parseFloat(transfer.amount) )
        res.status(200).send('total : ' + total)
    })
}

const getIncomes = (req,res) =>{
    Transaction.find({idReceiverAccount : req.params.id , transactionType:{$in:['transfer', 'recharge']}} 
        , function(err,data){
        if(err) res.status(400).send('Sin ingresos')
        let total = 0;
        data.forEach(income =>  total += parseFloat(income.amount) )
    })
}

const createTransfer = (req,res ) => {
    const {currency, amount, idSenderAccount, idReceiverAccount} = req.body

    const transaction = new Transaction({
        currency,
        amount,
        idSenderAccount,
        idReceiverAccount
    })
    transaction.save()
        .then(trans => {
            res.status(200).json({
                message: 'Transfer was created',
                transaction
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message || 'Error to created transfer'
            })
        })
}

module.exports= {
    getTranfers,
    getIncomes,
    createTransfer
}