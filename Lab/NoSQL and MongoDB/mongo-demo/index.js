const mongodb = require('mongodb');

const connectionString = 'mongodb://localhost:27017'
start();
async function start(){
    // client instance ...
    const connection = new mongodb.MongoClient(connectionString,{
    useUnifiedTopology: true,
})
    await connection.connect();

    console.log('MongoDB running')
    // reference to the database
    const db = connection.db('People')
    // reference to the collection
    const collection = db.collection('Person');
    // query or cursor
    const cursor = collection.find({});
    const data = await cursor.toArray();
    console.log(data)

}