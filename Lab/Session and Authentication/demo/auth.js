const express = require('express')
const session = require('express-session')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(session({
    saveUninitialized: true,
    secret: 'my secret code',
    cookie: {secure: false},
    resave: false
}))
app.get('/',(req,res)=>{
    if(req.session.user){
        res.send(`<p>Hello, ${req.session.user}</p>`)
    }else {
        res.send(`<p>Hello, guest</p>`)
    }
})

app.get('/login',(req,res)=> {
    res.send(`
    <form action="/login" method="post">
    <label for="name">Username: <input type="text" name="name" placeholder="Username"></label>
    <label for="pass">Password: <input type="password" name="pass" placeholder="Password"></label>
    <input type="submit" value="Submit">
    </form>
    `)
})

const users = {
    'peter': '123',
    'john': '12345'
}

app.post('/login',(req,res)=>{
    console.log(req.body)
    if(users[req.body.name] !== undefined && users[req.body.name] === req.body.pass){
        req.session.user = req.body.name
        res.redirect('/')
    }else{
        res.status(401).send('Unauthorized')
    }
})

app.listen(3000)