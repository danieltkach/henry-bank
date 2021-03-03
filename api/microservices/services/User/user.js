const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('./database/config');
const routes = require('./routes')

const corsMiddle = require('./middlewares/cors');
require('./middlewares/auth');

let app = express();

app.name = 'API_USER';


//middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(corsMiddle);
// app.use((req, res, next) => {   res.header("Access-Control-Allow-Origin", "*");   res.header("Access-Control-Allow-Headers",       "Origin, X-Requested-With, Content-Type, Accept, Authorization");   if (req.method === "OPTIONS") {       res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, PATH, GET");       return res.status(200).json({});   }   next(); })

//db connection
dbConnection();

const passport = require('passport');
const userController = require('./controllers/userController');
app.get('/user/profile', passport.authenticate('jwt', { session: false }), userController.getProfileByToken);


//routes
app.use('/user', routes);

app.listen(4001, () => {
  console.log('Server running on 4001');
});
