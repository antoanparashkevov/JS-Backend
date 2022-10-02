const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    //send is a combination for write() and end()
    res.send('hello')
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

app.get('/catalog',(req,res)=>{
    res.send('Welcome to catalog page')
})

app.get('/catalog/:productId',(req,res)=>{
    console.log(req.params)
    res.send('Welcome to product number ' + req.params.productId);
})

//every symbol, ex: /catalog/* also works.
app.all('*',(req,res)=>{
    res.status(404).send('404 not found')
})
app.listen(3000, ()=>console.log('running'));