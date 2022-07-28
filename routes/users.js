const router = require('express').Router()
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
let User = require('../models/user')

/**
 * Handle registering a new user. Hash their password with salt.
 */
router.post('/register',[
    check('firstName', 'First name can not be empty.').not().isEmpty(),
    check('lastName', 'Last name can not be empty.').not().isEmpty(),
    check('email', 'Please use a valid email address.').isEmail()
    ], async (req, res) => {
    
    const error = validationResult(req)

    if (!error.isEmpty()) {
        console.log(error)
        return res.status(400).json({msg: error.errors[0].msg})
    }

    const {firstName, lastName, email} = req.body

    let user = await User.findOne({ email })

    if (user) {
        return res.status(400).json({msg: 'Email already exists!'})
    }

    const hashedPw = await bcrypt.hash(req.body.password, 10)

    const password = hashedPw
    const date = new Date()
        
    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        date,
    })

    newUser.save()
    .then(() => {

        const data = {
            user: {
                id: newUser._id
            }
        }
  
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'})

        res.json({accessToken: accessToken})
    
    })
    .catch(err => res.status(400).json('There was an error' + err))
})

module.exports = router