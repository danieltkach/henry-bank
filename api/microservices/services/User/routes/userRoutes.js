const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/signup',passport.authenticate('signup', { session: false }), userController.createUser);
router.post('/login', userController.loginUser);
// router.post('/sendemail', userController.sendEmailUser);
router.post('/verify', userController.verifyCodeSecurity);
// router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUser);
router.put('/:id', userController.modifyUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getUsers);
router.get('/contact/:id' , userController.getContacts);


module.exports = router;
