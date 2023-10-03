const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, "saikhmirsat", (err, decoded) => {
            if (decoded) {
                console.log(decoded)
                req.body.user = decoded.UserID
                next()
            } else {
                res.send({ "msg": "Please Login" })
            }
        })
    } else {
        res.send({ "msg": "Please Login" })
    }
}

module.exports = {
    authenticate
}