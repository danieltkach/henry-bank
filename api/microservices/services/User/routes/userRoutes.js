const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/signup', passport.authenticate('signup', { session: false }),userController.createUser);
router.put('/alias/:id', userController.modifyAlias);
router.post('/login', userController.loginUser);
router.post('/verify', userController.verifyCodeSecurity);
router.put('/contact/:id', userController.addContact);
router.delete('/contact/:id', userController.deleteContact);
router.put('/:id', userController.modifyUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getUsers);


// router.get('/profile',passport.authenticate('jwt', { session: false }), (req, res, next) => {
//   console.log('asds')
//   res.status(200).json({
//     message: 'Informacion del perfil',
//     user: req.user,
//     token: req.query.token
//   });
// });

module.exports = router;
