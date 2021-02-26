const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/user/signup',passport.authenticate('signup', { session: false }), userController.createUser);
router.post('/user/login', userController.loginUser);
// router.post('/user/sendemail', userController.sendEmailUser);
router.post('/user/verify_token', userController.verifyToken);
// router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUser);
router.put('/user/:id', userController.modifyUser);
router.get('/user/:id', userController.getUser);
router.get('/user', userController.getUsers);


module.exports = router;
