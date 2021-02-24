const AccountModel = require('../models/AccountModel')

const createAccount = (req,res) => {
    const {userId, currency, CVU, balance} = req.body
    const account = new AccountModel({
        userId,
        currency,
        CVU,
        balance
    })
    account.save()
        .then((resp)=>{
            res.status(200).json({
                message: 'Account created',
                account: resp
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
    AccountModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        then(account => {
            if(!account){
                return res.status(404).json({
                    message: 'Account not found'
                })
            }
            res.status(200).json({
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

module.exports = {
    createAccount,
    findAccount,
    updateAccount,
    getAllAccounts
}