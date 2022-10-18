const {hashing,compare} = require('./hashing')

/**
 * 
 * {
 *     username: (string),
 *     hashedPassword: (string)
 * }
 */
const users = [];

async function register(username, password) {
    if(users.find(user=>user.username.toLowerCase() === username.toLowerCase())){
        throw new Error('Username is taken')
    }
    const user = {
        username,
        hashedPassword: await hashing(password)
    }
    users.push(user)
}

async function login(username,password){
    const user = users.find(user=>user.username === username)
    
    if(!user){
        return false
    } else {
        return compare(password,user.hashedPassword)
    }
}

module.exports = {
    users,
    register,
    login
}