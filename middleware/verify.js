const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(authHeader)
    console.log("token" + token)

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error,user) => {
        if (error) return res.sendStatus(403)
        req.user = user
        next()
    })
}