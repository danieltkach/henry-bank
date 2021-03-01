const {Router} = require('express') 

const router = Router() 

const contactController = require('../controllers/ContactController') 

 
 

router.get('/:id' , contactController.getAllContacts) 

 
 

module.exports = router 