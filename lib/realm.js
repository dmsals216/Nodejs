const realm = require('realm')

let userSchecma = {
    name: 'Users',
    primaryKey: 'no',
    properties: {
        no: 'int',
        name: 'string',
        tel: 'string'
    }
}

const userRealm = new realm({
    path: 'user.realm',
    schema: [userSchecma]
})

module.exports = {userRealm : userRealm}