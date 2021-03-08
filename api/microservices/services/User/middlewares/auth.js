const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const crypto = require('crypto');

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const codeSecurity = crypto.randomBytes(3).toString('hex').toUpperCase();
        const user = await User.create({ email, password, codeSecurity })
        return done(null, user)
    } catch (e) {
        done(e)
    }
}))

passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        console.log('User authenticated');
        const user = await User.findOne({ email })
        if (!user) {
            return done(null, false, { message: 'Correo electrónico no encontrado' })
        }

        const validate = await user.isValidPassword(password)

        if (!validate) {
            return done(null, false, { message: 'Contraseña incorrecta' })
        }

        return done(null, user, { message: 'Login successfull' })
    } catch (e) {
        return done(e)
    }
}))

passport.use('jwt', new JWTStrategy({
    secretOrKey: 'top_secret',
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('token')
}, async (token, done) => {
    try {
        const user = await User.findOne({ email: token.user.email })
        return done(null, user);
    } catch (e) {
        done(error)
    }
}))
