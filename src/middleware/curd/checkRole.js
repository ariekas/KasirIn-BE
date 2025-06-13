const jwt = require('jsonwebtoken');

exports.checkRole = (...allowedRoles) => {
    return (req, res, next) => {
        try {
            const checkToken = req.headers.authorization
            if(!checkToken || !checkToken.startsWith('Bearer ')){
                return res.status(400).json({ message: 'No token provided'})
            }

            const token = checkToken.split('')[1]
            const decoded = jwt.verify(token, process.env.JWT_TOKEN)

            if(!allowedRoles.includes(decoded.role)){
                return res.status(403).json({message: 'This role does not have access'})
            }

            next()
        } catch (error) {
            return res.status(401).json({message : 'Invalid token'})
        }
    }
}