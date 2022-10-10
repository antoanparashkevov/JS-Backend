const {Schema, model} = require('mongoose')

const PetSchema = new Schema({
    name: String,
    age: Number
})

const Pet = model('Pet', PetSchema)


module.exports = Pet