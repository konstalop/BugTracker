var express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('connected to mongodb')
})
.catch((err) => {
  console.log(err)
})

const projectsRouter = require('./routes/projects')
const ticketsRouter = require('./routes/tickets')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

app.use('/projects', projectsRouter)
app.use('/tickets', ticketsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server alive on port ${PORT}`))