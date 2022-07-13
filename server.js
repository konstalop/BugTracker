var express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('connected to mongodb')
})
.catch((err) => {
  console.log(err)
})

const projectsRouter = require('./routes/projects')
const ticketsRouter = require('./routes/tickets')

app.use('/projects', projectsRouter)
app.use('/tickets', ticketsRouter)



app.listen(PORT, () => console.log(`Server alive on port ${PORT}`))