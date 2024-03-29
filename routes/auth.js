const User = require('../models/user')
const bcrypt = require('bcrypt')
const router = require('./users')
const jwt = require('jsonwebtoken')
const verify = require('../middleware/verify')

/**
 * Handle getting currently logged in user, verify users accessToken.
 */
router.get('/', verify, async (req, res) => {
    try {
        const user = await User.findById(req.user.user.id).select('-password')
        if (user == null) return res.status(500).json('Error happened while finding user!')
        res.json(user)
    } catch (err) {
        res.status(500).send('There was an error!' + err)
    }
})

/**
 * Login a new user and create an accessToken.
 */
router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(401).json('Invalid login!')
    }

    const validPw = await bcrypt.compare(req.body.password, user.password)

    const data = {
        user: {
            id: user.id
        }
    }

    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'})

    if (validPw) {
        return res.json({accessToken: accessToken})
    } else {
        return res.status(401).json('Invalid login!')
    }
})


module.exports = router