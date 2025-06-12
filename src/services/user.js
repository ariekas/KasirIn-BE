const prisma = require('../config/database');

exports.getAll = async() => {
    return await prisma.user.findMany()
}

exports.getById = async(id) => {
    return await prisma.user.findUnique({where: {id}})
}

exports.create = async(data) => {
    return await prisma.user.create({data})
}

exports.delete = async(id) => {
    const userId = await exports.getById(id);
    if(!userId) throw new Error('User not found')

    return await prisma.user.delete({where: {id}})
}