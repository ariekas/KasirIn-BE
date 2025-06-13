const prisma = require('../config/database');

exports.getAll = async() => {
    return await prisma.user.findMany()
}

exports.getById = async(id) => {
    const GetUserId = await prisma.user.findUnique({where: {id}});
    if(!GetUserId) throw new Error(`User with id ${id} not found`);

    return GetUserId;
}

exports.create = async(data) => {
    const checkUsername = await prisma.user.findUnique({
        where: {username: data.username}
    })
    if(checkUsername){
        throw new Error('This username already exist');
    }
    
    const checkEmail = await prisma.user.findUnique({
        where: {email: data.email}
    })
    if(checkEmail){
        throw new Error('This username already exist');
    }

    return await prisma.user.create({data})
}

exports.delete = async(id) => {
    const userId = await exports.getById(id);
    if(!userId) throw new Error(`User with id ${id} not found`)

    return await prisma.user.delete({where: {id}})
}