const mongodb = require('mongodb');

const connectionString = 'mongodb://localhost:27017'


// client instance ...
const connection = new mongodb.MongoClient(connectionString,{
    useUnifiedTopology: true,
})

connection.connect((err,client)=>{
    console.log('MongoDB running')
    // reference to the database
    const db = client.db('People')
    // reference to the collection
    const collection = db.collection('Person');
    // query or cursor
    const cursor = collection.find({})
    cursor.toArray((data)=>{
        console.log(data)
    })
})