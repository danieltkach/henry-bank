const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')
const {dbConnection} = require("./database/config")
const routes = require('./routes/index.js');

let app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'));

//routes
app.use('/', routes);

//db connection
dbConnection()

app.listen(4002, () => {
    console.log('Server running on 4002');
})