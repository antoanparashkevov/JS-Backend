const {Schema, model} = require('mongoose')

const PetSchema = new Schema({
    name: String,
    age: {
        type: Number,
        min: 0,
        default: 0,
        max: 15
    },
    color: {
        type: String,
        required: true,
        default: '',

    }
})

PetSchema.methods.sayHi= function(){
    return `${this.name} says hi!`
}

// we create a model with the given schema
const Pet = model('Pet', PetSchema)


module.exports = Pet