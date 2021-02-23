const mongoose = require('mongoose')

const {
  DB_HOST, DB_NAME, DB_PORT
} = process.env;

const dbConnection = async () => {
    try {
        await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
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
