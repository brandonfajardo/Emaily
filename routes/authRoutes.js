const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { // google = GoogleStrategy
        scope: ['profile', 'email'] // Ask google to give us access to user's profile & email
    }))

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send("LOGOUT")
    })

    app.get('/auth/google/callback', passport.authenticate('google')); // turn code into profile

    app.get('/api/currentUser', (req, res) => {
        res.send(req.user)
    })
}