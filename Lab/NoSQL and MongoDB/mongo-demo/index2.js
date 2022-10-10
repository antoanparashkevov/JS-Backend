const mongoose = require('mongoose');
const Pet = require('./models/Pet')

const connectionString = 'mongodb://localhost:27017/testdb'

start()

async function start(){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

        console.log('database connected')
        const data = await Pet.find({});
        console.log(data)

        const pet = new Pet({
            name: 'Jo',
            age: 25
        })

        await pet.save();
}