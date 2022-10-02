const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    //send is a combination for write() and end()
    res.send('hello')
})

app.post('/create',(req,res)=>{
    console.log('handling post request')
    res.end()
})

app.listen(3000, ()=>console.log('running'));