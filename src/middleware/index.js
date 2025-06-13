const {CheckAlreadyLogin} = require('./auth/alreadyLogin')
const {loginLimit} = require('./auth/loginLimit')
const {validateLogin} = require('./auth/validateLogin')
const {notFound} = require('./not_found/notFound')
const {checkRole} = require('./curd/checkRole')
module.exports = {
    auth:{
        CheckAlreadyLogin,
        loginLimit,
        validateLogin,
        checkRole
    },
    notFound:{
        notFound
    },
    crud: {
        checkRole
    }
}
