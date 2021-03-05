const AccountModel = require('../models/AccountModel')

//crear en el registro
const initCreateAccount = (req,res) => {
    const {userId} = req.params
    const account = new AccountModel({
        userId,
    })
    account.save()
        .then((resp)=>{
            res.status(200).json({
                message: 'Cuenta creada',
                account
            })
        })
        .catch(err=>{
            res.status(400).json({
                message: err.message || "Some error occurred while creating the Account."
            })
        })
}

const createAccount = (req,res) => {
    const {userId} = req.params
    const account = new AccountModel({
        userId,
    })
    account.save()
        .then((resp)=>{
            res.status(200).json({
                message: 'Cuenta creada',
                account
            })
        })
        .catch(err=>{
            res.status(400).json({
                message: err.message || "Some error occurred while creating the Account."
            })
        })
}

const findAccount = (req, res) => {
    AccountModel.findById(req.params.id)
        .then(account => {
            if(!account){
                return res.status(404).json({
                    message: "Account not found"
                })
            }
            res.status(200).json({
                account
            })
        })
}

const updateAccount = (req, res) => {
    AccountModel.findByIdAndUpdate(req.params.id, {currency: req.body.currency, balance: req.body.balance}, {new: true})
        .then(account => {
            if(!account){
                return res.status(404).json({
                    message: 'Account not found'
                })
            }
            res.status(200).json({
                message: 'Datos actualizados',
                account
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message || "Some error occurred while updating the Account."
            })
        })
}

const getAllAccounts = (req,res) => {
    AccountModel.find()
     .then(resp => {
         res.status(200).json({
             resp
         })
     })
     .catch(err => {
        res.status(400).json({
            message: err.message || "Some error occurred while get  Accounts."
        })
    })
}

const getBalance = (req,res) => {
    const idAccount = req.params.id
    Account.findById(idAccount , (err , data) => {
        if(err) res.status(400).send("Error de balance")
        res.status(200).send(data)
    })
}

module.exports = {
    createAccount,
    findAccount,
    updateAccount,
    getAllAccounts,
    getBalance,
    initCreateAccount
}
