const helper = require('../utils/helper');


module.exports = (req, res, next) => {
    try {
        if (!req.url.includes('/api/v1/auth/login') && !req.url.includes('/api/v1/auth/register')) {
            const token = req.headers.authorization.split(' ')[1]
            const decodedToken = helper.verifyToken(token)
            if (decodedToken.decodedToken == null) {
                return res.json({message:"Token is not valid."})
            }
            req.user = decodedToken
            next()
            return
        }
        next()
    } catch (error) {
        return res.json({message:"UNAUTHORIZED ACCESS!"})
    }
}