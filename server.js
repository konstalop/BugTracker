var express = require('express')
require('dotenv').config()
var app = express()

app.get('/', function (req, res) {
  res.send('Test123')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server alive on port ${PORT}`))