const {Router} = require('express')
const router = Router()
const accountController = require('../controllers/accountController')

router.post('/', accountController.createAccount);
router.get('/accounts', accountController.getAllAccounts)
router.get('/:id', accountController.findAccount); 
router.put('/:id', accountController.updateAccount); 

module.exports = router


