const {CheckAlreadyLogin} = require('./auth/auth')
const {loginLimit} = require('./auth/loginLimit')
const {notFound} = require('./not_found/notFound')
module.exports = {
    auth:{
        CheckAlreadyLogin,
        loginLimit
    },
    notFound:{
        notFound
    }
}
