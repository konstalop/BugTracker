const User = require('../models/user')
const bcrypt = require('bcrypt')
const router = require('./users')

router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(401).json('Invalid login!')
    }

    const validPw = await bcrypt.compare(req.body.password, user.password)

    if (validPw) {
        return res.send('Succesfully logged in!')
    } else {
        return res.status(401).json('Invalid login!')
    }
})


module.exports = router