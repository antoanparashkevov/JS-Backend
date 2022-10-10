const {Schema, model} = require('mongoose')

const PetSchema = new Schema({
    name: String,
    age: Number
})

// we create a model with the given schema
const Pet = model('Pet', PetSchema)


module.exports = Pet