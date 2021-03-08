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

const getStatistics = (req,res) =>{
    
    let start =new Date( (new Date)-(1000*60*60*24*30*7))
    
    let end = new Date 
    const {id} = req.params    

    Transaction.find( {idSenderAccount:id  , $and : [{date : {$gte : start}}, { date : {$lte : end}}]} , function(err,data){
        if(err) res.status(400).json({message:'Sin transferencias'})
        let spent=[]
        let total = 0
        let month= end.getMonth()
        let monthArr=[]

        for(let i=0; i<6 ;i++){

            data.forEach(transfer => {            
                if (transfer.date.getMonth()===month) {
                    total += parseFloat(transfer.amount)
                }            
            })
            spent.unshift(total)
            monthArr.unshift(month+1)
            total=0
            if(month===0) month=12
            month--
        }         
         month= end.getMonth()
        let weekArr=Array(16).fill(0)
        let weekNumber=[]
        for(let i=3; i>=0 ;i--){

            data.forEach(transfer => {            
                if (transfer.date.getMonth()===month) {
                    if (transfer.date.getDate()>=1 &&transfer.date.getDate()<=7){
                        weekArr[i*4+0]+=parseFloat(transfer.amount)
                    }
                    if (transfer.date.getDate()>=8 &&transfer.date.getDate()<=14){
                        weekArr[i*4+1]+=parseFloat(transfer.amount)
                    }
                    if (transfer.date.getDate()>=15 &&transfer.date.getDate()<=21){
                        weekArr[i*4+2]+=parseFloat(transfer.amount)
                    }
                    if (transfer.date.getDate()>=22){
                        weekArr[i*4+3]+=parseFloat(transfer.amount)                        
                    }                    
                }                          
            }) 
            for (let j=0;j<4;j++){
                weekNumber[i*4+j]=`week:${j+1}, month:${month+1}`
            }        
            if(month===0) month=12
            month--
        }

        let day=end
        total=0
        let spentDay=[]
        let dayArr =[]
        month= end.getMonth()

        for(let i=0; i<30 ;i++){

            data.forEach(transfer => { 
                if(transfer.date.getMonth()===month)            
                    if (transfer.date.getDate()===day.getDate()) {
                        total += parseFloat(transfer.amount)
                    }            
            })
            spentDay.unshift(total)
            dayArr.unshift(day)
            total=0
            day=new Date( (end)-(1000*60*60*24*(i+1)))
            month=day.getMonth()
        }
        res.status(200).json({message:`statistics`, month:{spent,monthArr} , week:{spent:weekArr,weekNumber} , day:{spentDay,dayArr}})
    })
}


module.exports= {
    getTranfers,
    getIncomes,
    createTransfer,
    getIncomesByDate,
    rapiTransfer,
    newTransaction,
    getStatistics
}