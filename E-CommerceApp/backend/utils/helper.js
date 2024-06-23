const jwt = require('jsonwebtoken')


const verifyToken = (token)=>{
    const result = jwt.verify(token, process.env.SECRET_KEY);
    return result;
}

module.exports = { verifyToken}