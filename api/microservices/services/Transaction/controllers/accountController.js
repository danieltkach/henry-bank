const Account = require('../models/AccountModel')

const getBalance = (req,res) => {
    const idAccount = req.params.id
    Account.findById(idAccount , (err , data) => {
        if(err) res.status(400).send("Error de balance")
        res.status(200).send(data)
    })
}

module.exports= {
    getBalance,
}