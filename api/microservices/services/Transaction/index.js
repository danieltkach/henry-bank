const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('./database/config');
const routes = require('./routes/index.js');

let app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Credentials', 'true');
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept'
  // );
  // Dominio que tengan acceso (ej. 'http://example.com')
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Metodos de solicitud que deseas permitir
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
  // Encabecedados que permites (ej. 'X-Requested-With,content-type')
     res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

//routes
app.use('/transaction', routes);

//db connection
dbConnection();

app.listen(4002, () => {
  console.log('Server running on 4002');
});
