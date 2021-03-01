const { Router } = require('express');
// import all routers;

const router = Router();

//todas las rutas de transacciones
router.use('/', require('./userRoutes'));
router.use('/validate-address', require('./addressRoutes'));

module.exports = router