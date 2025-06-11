const prisma = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
const {username, password } = req.bod

console.log(req.body)
try {
    
    const user = await prisma.user.findUnique({where:{username}})
    if(!user) return res.status(404).json({message: 'User not found'})

    const validPw = await bcrypt.compare(password, user.password)
    if(!validPw) return res.status(404).json({message: 'invalid password'})

    const token = jwt.sign(
        {userId: user.id, role: user.role},
        process.env.JWT_TOKEN,
        {expiresIn: '1d'}
    )
    console.log('Token Login:', token);
    res.json({
        meesage : "login success",
        user:{
            username : user.username,
            email: user.email,
            role : user.role
        }
    })
} catch (error) {
    res.status(500).json({message: error.message})
}
}