const User = require('../models/user')
const bcrypt = require('bcrypt')
const router = require('./users')
const jwt = require('jsonwebtoken')

//Handle login
router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(401).json('Invalid login!')
    }

    const validPw = await bcrypt.compare(req.body.password, user.password)

    const payload = {
        user: {
            id: user.id
        }
    }

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 3600})

    if (validPw) {
        return res.json({token: accessToken})
    } else {
        return res.status(401).json('Invalid login!')
    }
})


module.exports = router