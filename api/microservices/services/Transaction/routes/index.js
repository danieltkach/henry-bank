const { Router } = require('express');
// import all routers;

const router = Router();

//todas las rutas de transacciones
router.use('/', require('./transactionRoutes'))
router.use('/account', require('./accountRoutes'))

module.exports = router