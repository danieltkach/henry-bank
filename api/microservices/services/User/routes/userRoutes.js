const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const setPassword = require('../middlewares/setPassword');


router.post('/signup', passport.authenticate('signup', { session: false }), userController.createUser);
router.put('/alias/:id', userController.modifyAlias);
router.post('/login', userController.loginUser);
router.post('/verify', userController.verifyCodeSecurity);
router.put('/contact/:id', userController.addContact);
router.delete('/contact/:id', userController.deleteContact);
router.put('/:id', userController.modifyUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getUsers);

module.exports = router;
