const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    //send is a combination for write() and end()
    res.send('hello')
})

app.listen(3000);