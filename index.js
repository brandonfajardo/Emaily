const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()
app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] }))
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000 // process.env.PORT is for production... 5000 is for dev
app.listen(PORT, () => {
    console.log('Express server is running')
})