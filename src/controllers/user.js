const userService = require('../services/user')

exports.getAllUser = async (req, res) => {
    const users = await userService.getAll()

    res.status(200).json({
        message: 'success get all users',
        data: users
    })
}

exports.createUser = async (req, res) => {
    const newUser = await userService.create(req.body)

    res.status(200).json({
        message: 'User created successfully',
        data: newUser
    })
}