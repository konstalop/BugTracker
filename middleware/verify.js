const jwt = require('jsonwebtoken')

/**
 * Middleware to verify JWT tokens.
 * @param {*} req request from client
 * @param {*} res response to the cleint
 * @param {*} next continue if succesful
 * @returns a status code which tells if the token is valid or not.
 */
module.exports = function(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error,user) => {
        if (error) return res.sendStatus(403)
        req.user = user
        next()
    })
}