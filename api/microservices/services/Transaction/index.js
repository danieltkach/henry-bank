const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')
const {dbConnection} = require("./database/config")
const transactionRoutes = require("./routes/transactionRoutes")
let app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'));

//db connection
dbConnection()

//routes

app.use('/' , transactionRoutes)


app.get('/transaction',(req,res)=> {
    res.send('Soy una transaction')
})

app.listen(4002, () => {
    console.log('Server running on 4002');
})