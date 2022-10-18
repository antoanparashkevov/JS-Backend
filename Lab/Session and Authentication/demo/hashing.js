const bcrypt = require('bcrypt')

// const hashResult = bcrypt.hashSync('123456',10)
// console.log(hashResult)

// const result = bcrypt.compareSync('123456',hashResult)
// console.log(result)

async function hashing(password){
    return bcrypt.hash(password,10)
}

async function compare(password, hashedPassword){
    return bcrypt.compare(password,hashedPassword)
}

module.exports = {
    hashing,
    compare
}