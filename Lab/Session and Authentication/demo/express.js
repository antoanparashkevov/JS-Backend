const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/',(req,res)=>{
    console.log(req.cookies);
    res.cookie('cookieParser','alabala')
})

app.listen(3000)