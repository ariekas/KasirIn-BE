const prisma = require('../src/config/database');
const bcrypt = require('bcrypt')

async function main() {
    const randomPw = await bcrypt.hash('123456', 10);

    await prisma.user.upsert({
        where : {email: 'admin@gmail.com'},
        update:{},
        create:{
            username: 'admin',
            email: 'admin@gmail.com',
            password : randomPw,
            role : 'admin'
        }
    });
}

main()
.catch((e) => console.error(e))
.finally(async () => await prisma.$disconnect())