const mongoose = require('mongoose')

const {
  DB_HOST, DB_NAME, DB_PORT
} = process.env;

const dbConnection = async () => {
    console.log(DB_HOST,DB_NAME,DB_PORT)
    try {
        await mongoose.connect(`mongodb://localhost:27017/henry_bank_user`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("Base de datos de users online")
    } catch (error) {
        console.log(error)
        throw new Error("Error al iniciar base de datos")
    }
}

module.exports = {
    dbConnection
}
