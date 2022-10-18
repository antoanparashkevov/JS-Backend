const {hashing,compare} = require('./hashing')

/**
 * 
 * {
 *     username: (string),
 *     hashedPassword: (string)
 * }
 */
const users = [
    {username: 'Nadia'}
];

async function register(username, password) {
    if(users.some(user=>user.username.toLowerCase() === username.toLowerCase())){
        throw new Error('Username is taken')
    }
    const user = {
        username,
        hashedPassword: await hashing(password)
    }
    users.push(user)
}

async function login(username,password){
    
}

module.exports = {
    users,
    register,
    login
}