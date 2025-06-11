const jwt = require('jsonwebtoken');

exports.CheckAlreadyLogin = (req, res, next) => {
    const authToken = req.headers.authorization

    if(!authToken || authToken.startsWith('Bearer ')){
        return next()
    }

    const token = authToken.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)

        return res.status(400).json({
            message: 'User already login. please Log out first'
        })
    } catch (error) {
        return next()
    }
}