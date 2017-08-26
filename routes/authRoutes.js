const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { // google = GoogleStrategy
        scope: ['profile', 'email'] // Ask google to give us access to user's profile & email
    }))

    app.get('/auth/google/callback', passport.authenticate('google')); // turn code into profile
}