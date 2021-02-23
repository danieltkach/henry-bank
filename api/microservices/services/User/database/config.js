const mongoose = require('mongoose')

const {
  DB_HOST, DB_TABLE, DB_PORT
} = process.env;

const dbConnection = async () => {
    try {
        await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_TABLE}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("Base de datos online")
    } catch (error) {
        console.log(error)
        throw new Error("Error al iniciar base de datos")
    }


}

module.exports = {
    dbConnection
}
