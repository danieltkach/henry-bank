const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('./database/config');
const routes = require('./routes')
const corsMiddle = require('./middlewares/cors');

const userController = require('./controllers/userController');
const passport = require('passport');


let app = express();

app.name = 'API_USER';

require('./middlewares/auth');

//middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(corsMiddle);

// app.use((req, res, next) => {   res.header("Access-Control-Allow-Origin", "*");   res.header("Access-Control-Allow-Headers",       "Origin, X-Requested-With, Content-Type, Accept, Authorization");   if (req.method === "OPTIONS") {       res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, PATH, GET");       return res.status(200).json({});   }   next(); })


//db connection
dbConnection();

//routes
app.use('/user', routes);


app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.status(200).json({
    message: 'Informacion del perfil',
    user: req.user,
  });
});

app.listen(4001, () => {
  console.log('Server running on 4001');
});
