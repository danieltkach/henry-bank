const {Router} = require('express')
const router = Router()
const accountController = require('../controllers/accountController')

router.post('/:userId', accountController.createAccount);
router.post('/init/:userId', accountController.initCreateAccount);
router.get('/', accountController.getAllAccounts);
router.get('/:id', accountController.findAccount);
router.put('/:id', accountController.updateAccount);
router.get('/:id', accountController.getBalance);
router.get('/external/:id', accountController.cvuExternal);


module.exports = router
