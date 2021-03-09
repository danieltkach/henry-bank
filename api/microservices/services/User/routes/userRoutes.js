const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

router.post('/signup', passport.authenticate('signup', { session: false }), userController.createUser);
router.put('/alias/:id', userController.modifyAlias);
router.post('/login', userController.loginUser);
router.post('/send/email', userController.sendEmailVerify);
router.post('/verify', userController.verifyCodeSecurity);
router.put('/contacts/:id', userController.addContact);
router.delete('/contacts/:id', userController.deleteContact);
router.put('/:id', userController.modifyUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getUsers);

module.exports = router;
