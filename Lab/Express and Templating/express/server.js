const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    //send is a combination for write() and end()
    res.send('hello')
})


//every symbol, ex: /catalog/* also works.
app.all('*',(req,res)=>{
    res.status(404).send('404 not found')
})

app.get('/create',(req,res)=>{
    res.send(`
    <form method="post">
    <input type="text" name="name">
    <button>Send</button>
    </form>
    `)
})

app.post('/create',(req,res)=>{
    console.log('handling post request')
    res.end()
})

app.listen(3000, ()=>console.log('running'));