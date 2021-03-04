const Transaction = require('../models/TransactionModel')
const AccountModel = require('../models/AccountModel')
const { response } = require('express')


const getTranfers = (req,res) =>{
    
    Transaction.find({idSenderAccount : req.params.id , transactionType:'transfer'} , function(err,data){
        if(err) res.status(400).send('Sin transferencias')
        let total = 0;
        data.forEach(transfer =>  total += parseFloat(transfer.amount) )
        res.status(200).send(total)
    })
}

const getIncomes = (req,res) =>{
    Transaction.find({idReceiverAccount : req.params.id /* , transactionType:{$in:['transfer', 'recharge']} */} 
        , function(err,data){
        if(err) res.status(400).send('Sin ingresos')
        let total = 0;
        data.forEach(income =>  total += parseFloat(income.amount) )
        res.status(200).send(total)
    })
}

const createTransfer = (req,res ) => { 
    const {currency, amount, idSenderAccount, idReceiverAccount} = req.body
//TODO validar cuentas
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

const getIncomesByDate = (req,res) =>{
    
    let start = new Date (req.params.start)
    let end = new Date (req.params.end)
    const {id} = req.params    

    Transaction.find({ $or:[{idReceiverAccount :id} , {idSenderAccount:id} ] , $and : [{date : {$gte : start}}, { date : {$lte : end}}]} , function(err,data){
        if(err) res.status(400).json({message:'Sin transferencias'})
        let total = 0;
        data.forEach(transfer => {
            if(transfer.idReceiverAccount===id){
                total += parseFloat(transfer.amount)
            } 
            if (transfer.idSenderAccount===id) {
                total -= parseFloat(transfer.amount)
            }            
        }  )
        res.status(200).json({message:`balanse entre ${req.params.start} y ${req.params.end}`, total: total})
    })
}

const  rapiTransfer =  (req,res ) => { 
    const { amount, cvu} = req.body

     AccountModel.findOne({cvu:cvu})
        .then((acc)=>{                 
            acc.balance +=amount        
            acc.save() 
            return acc
        }) 
        .then(trans => {
            console.log(trans) 
            
        const transaction = new Transaction({
            transactionType:"recharge",
            currency:"pesos",
            amount,
            idSenderAccount:-1,
            idReceiverAccount:trans._id    
        }) 
        transaction.save()
        return transaction
        })
        .then(trans => {          
            res.status(200).json({
                message: 'Transfer complete',
                trans
            })
        })                  
        .catch(err => {
            res.status(400).json({
                message: err.message || 'Error in transfer'
            })
        })
}

const newTransaction = (req,res) => {
    const idSender = req.params.idSender
    const {cash , cvu , idReceiver} = req.body

    let accountLocal ;

    AccountModel.findById(idSender)
    .then( send => {
        if(send.balance < cash) return new Error('Saldo insuficiente')
        accountLocal = send
        if(!cvu) return AccountModel.findById(idReceiver)
        else return AccountModel.findOne({cvu : cvu})
    })
    .then(receive => {
        receive.balance += parseFloat(cash)
        receive.save()
        accountLocal.balance -= parseFloat(cash)
        accountLocal.save() 

        const transaction = new Transaction({
            transactionType:"transfer",
            currency:"pesos",
            amount : cash,
            idSenderAccount: idSender,
            idReceiverAccount: idReceiver,
        }) 
        
        transaction.save()

        res.status(200).json({
            message : 'Transferencia realizada exitosamente',
            tr : response
        })  
    })    
     
    .catch(err => res.status(400).json({
        message: 'Transferencia incompleta',
        error : err
    }) )




}


module.exports= {
    getTranfers,
    getIncomes,
    createTransfer,
    getIncomesByDate,
    rapiTransfer,
    newTransaction
}