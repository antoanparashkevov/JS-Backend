const mongoose = require('mongoose');
const Pet = require('./models/Pet')
const Article = require('./models/Article');
const Comment = require('./models/Comment');

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

        //new record
        // const pet = new Pet({
        //     name: 'Peter',
        //     age: 2,
        //     color: 'Yellow'
        // })
        // await Article.create({
        //     author:'Nadia',
        //     title:'Alabala',
        //     content: 'data'
        //     })
         await Comment.create({
            author:'Nadia',
            content: 'data'
            })
        // await Pet.deleteOne({_id: '63445bffe702b882927a664f'})
        // await Pet.findByIdAndUpdate('63445beb65ac28a0cd5dfd14',{ $set: {age: 3}})
        // await pet.save();
        const article = await Article.findOne({});
        const comment  = await Comment.findOne({});

        article.comments.push(comment);
        await article.save();

        await mongoose.disconnect();
}