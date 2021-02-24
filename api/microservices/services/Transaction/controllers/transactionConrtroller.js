const Transaction = require('../models/TransactionModel');


const getTranfers = (req,res) =>{

    Transaction.find({idSenderAccount : req.params.id , transactionType:'transfer'} , function(err,data){
        if(err) res.status(400).send('Sin transferencias')
        let total = 0;
        data.map(transfer =>  total += transfer.amount )
        res.status(200).send('total : ' + total)
    })
}

const getIncomes = (req,res) =>{

    Transaction.find({idReceiverAccount : req.params.id , transactionType:'transfer'} , function(err,data){
        if(err) res.status(400).send('Sin ingresos')
        let total = 0;
        data.map(income =>  total += income.amount )
        Transaction.find({idReceiverAccount: req.params.id , transactionType:'recharge'} , function(err,data){
            if(err) res.status(200).send(total)
            data.map(income =>  total += income.amount )
            res.status(200).send('total : ' + total)
        })
    })
}


module.exports= {
    getTranfers,
    getIncomes
}