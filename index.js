const express = require('express')
require('./services/passport')
const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000 // process.env.PORT is for production... 5000 is for dev
app.listen(PORT, () => {
    console.log('Express server is running')
})