const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ bye: 'now'})
})

const PORT = process.env.PORT || 5000 // process.env.PORT is for production... 5000 is for dev
app.listen(PORT, () => {
    console.log('Express server is running')
})