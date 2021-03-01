const {Router} = require('express')
const router = Router()
const accountController = require('../controllers/accountController')

router.post('/:userId', accountController.createAccount);
router.get('/', accountController.getAllAccounts)
router.get('/:id', accountController.findAccount); 
router.put('/:id', accountController.updateAccount); 
router.get('/balance/:id', accountController.getBalance)

module.exports = router


