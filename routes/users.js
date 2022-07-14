const router = require('express').Router()
const bcrypt = require('bcrypt')
let User = require('../models/user')

//Handle creating a new user
router.post('/register', async (req, res) => {
    const hashedPw = await bcrypt.hash(req.body.password, 10)
    console.log(req.body.firstName)

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = hashedPw
    const date = new Date()
    const projects = []

    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        date,
        projects
    })

    newUser.save()
    .then(() => res.send('User has been created!'))
    .catch(err => res.status(400).json('There was an error while creating an user: '+err))
})

module.exports = router