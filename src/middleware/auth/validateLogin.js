// Untuk mencegah SQL injection / XSS, validasi dan sanitasi input user.
const { body, validationResult } = require('express-validator');

exports.validateLogin = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    (req,res,next) => {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({message: error.array()});
        }
        next()
    }
]

