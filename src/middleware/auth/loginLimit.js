// Cegah brute-force login dengan membatasi jumlah percobaan login dari IP yang sama.
const rateLimit = require('express-rate-limit');

exports.loginLimit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3,
    message: 'Too many login attempts from this IP, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders : false
}) 