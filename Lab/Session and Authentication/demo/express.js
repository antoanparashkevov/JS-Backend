const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const session = require('express-session')
app.use(cookieParser())
//NOTE secure: true only on HTTPS
app.use(session({
    secret:'my secret key',
    saveUninitialized: true,
    resave: false,
    cookie: {secure: false}
}))

app.get('/',(req,res)=>{
    console.log(req.cookies);
    console.log(req.session);
    req.session.message = 'John'
    res.cookie('cookieParser','alabala')
})

app.listen(3000)