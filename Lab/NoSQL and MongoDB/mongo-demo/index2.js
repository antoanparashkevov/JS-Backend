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

        //cursor or query
        // const data = await Pet.find({});
        // console.log(data[0].sayHi())

        // const pet = new Pet({
        //     name: 'Peter',
        //     age: 2,
        //     color: 'Yellow'
        // })
        await Pet.deleteOne({_id: '63445bffe702b882927a664f'})
        // await pet.save();

        await mongoose.disconnect();
}