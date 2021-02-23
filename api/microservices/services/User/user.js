const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')
const { dbConnection } = require("./database/config")
const routes = require("./routes/userRoutes.js");

let app = express();

app.name = 'API_USER';

//middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors())
app.use(morgan('dev'));

//db connection
dbConnection();

app.use("/", routes);

app.listen(4001, () => {
    console.log('Server running on 4001');
})
