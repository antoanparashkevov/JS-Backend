const express = require('express');

//registering controllers
const catalogController = require('./controllers/catalogController')
const createController = require('./controllers/createController')

//registering middlewares
const logger = require('./middleware/logger')
const app = express();

app.get('/',(req,res)=>{
    //send is a combination for write() and end()
    // res.send('hello')
    
    res.sendFile(__dirname + '/index.html')
})

//Application level middleware
app.use(logger())

app.use('/create',createController)

app.use('/catalog',catalogController)


app.get('/data',(req,res)=>{
    res.json([
        {
            name:'Peter',
            age:25
        },
        {
            name:'John',
            age:30
        }
    ])
})

//every symbol, ex: /catalog/* also works.
app.all('*',(req,res)=>{
    res.status(404).send('404 not found')
})
app.listen(3000, ()=>console.log('running'));