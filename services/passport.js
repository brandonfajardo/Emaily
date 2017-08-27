const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' // after user grants permission take them here... this URI needs to be authorized on google
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id})
        .then((user) => {
            if (user){
                done(null, user)
            } else {
                User.create({ googleId: profile.id })
                    .then((user) => {
                        done(null, user)
                    })
            }
        })
}))