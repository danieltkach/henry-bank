const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

const passport = require('passport')
const jwt = require('jsonwebtoken')


router.post('/signup', passport.authenticate('signup', { session: false }), userController.createUser);

router.post('/login', userController.loginUser);

// router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUser);


module.exports = router;
