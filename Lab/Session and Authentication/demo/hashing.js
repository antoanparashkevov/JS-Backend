const bcrypt = require('bcrypt')

const hashResult = bcrypt.hashSync('123456',10)
console.log(hashResult)

const result = bcrypt.compareSync('123456',hashResult)
console.log(result)