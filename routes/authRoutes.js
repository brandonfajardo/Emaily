const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { // google = GoogleStrategy
        scope: ['profile', 'email'] // Ask google to give us access to user's profile & email
    }))

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/surveys')
    });

    app.get('/api/currentUser', (req, res) => {
        res.send(req.user)
    })
}

// auth/google --> auth/google/callback --> strategy --> serialize/deserialize