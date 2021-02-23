const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/henry_bank_transaction",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("Base de datos de transactions online")
    } catch (error) {
        console.log(error)
        throw new Error("Error al iniciar base de datos")
    }


}

module.exports = {
    dbConnection
}