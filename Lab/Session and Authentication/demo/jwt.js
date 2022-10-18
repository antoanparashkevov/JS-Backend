const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

const secret = 'mysecretcode';
app.use(cookieParser())
app.use((req,res,next)=>{
    const token = req.cookies.token;
    if(token){
        req.user = jwt.verify(token)
    }
    
    next()
})

app.get('/', (req,res)=>{
    if(req.user){
        res.send('Hello' + req.user.username)
    }else{
        res.send('Hello, guest')
    }
})

app.get('/jwt',(req,res)=>{
    const payload = {
        username: 'Antoan',
        role: ['user','admin']
    } 
    const token = jwt.sign(payload,secret);
    res.cookie('token',token);
    res.send('Token saved!');
})