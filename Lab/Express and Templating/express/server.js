const express = require('express');

//registering controllers
const catalogController = require('./controllers/catalogController')
const createController = require('./controllers/createController')
const app = express();

app.get('/',(req,res)=>{
    //send is a combination for write() and end()
    // res.send('hello')
    
    res.sendFile(__dirname + '/index.html')
})

// app.get('/create',(req,res)=>{
//     res.send(`
//     <form method="post">
//     <input type="text" name="name">
//     <button>Send</button>
//     </form>
//     `)
// })
//
// app.post('/create',(req,res)=>{
//     console.log('handling post request')
//     res.end()
// })

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