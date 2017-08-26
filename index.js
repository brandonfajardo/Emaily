const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000 // process.env.PORT is for production... 5000 is for dev
app.listen(PORT, () => {
    console.log('Express server is running')
})