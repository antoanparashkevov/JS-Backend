const express = require('express')
const session = require('express-session')
const {register, login, users} = require("./userService");

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(session({
    saveUninitialized: true,
    secret: 'my secret code',
    cookie: {secure: false},
    resave: false
}))

const homeTemplate = (currentUser, allUsers) => 
    `<h1>Welcome, ${currentUser || 'guest'}</h1>
    ${!currentUser ? '<p>Please login <a href="/login">Login</a></p>' : ''}
   <ul>
   ${allUsers.map(user=>`<li>${user.username}</li>`).join('\n')}
</ul>
`

app.get('/',(req,res)=>{
   res.send(homeTemplate(req.session.user,users))
})

const registerTemplate = (error)=>
    `
    <h1>Register</h1>
     ${error ? `<p>${error}</p>` : ''}
    <form action="/register" method="post">
    <label for="name">Username: <input type="text" name="name" placeholder="Username"></label>
    <label for="pass">Password: <input type="password" name="pass" placeholder="Password"></label>
    <label for="pass">Repeat: <input type="password" name="repass" placeholder="Password"></label>
    <input type="submit" value="Sign up">
    </form>
    `


app.get('/register',(req,res)=> {
    res.send(registerTemplate())
})

app.post('/register',async (req,res)=> {
    try{
        if(req.body.name.trim() === '' || req.body.password === '') {
            throw new Error('All fields are required!')
        }else if(req.body.pass !== req.body.repass){
            throw new Error('Password doesn\'t match');
        }
        await register(req.body.name,req.body.pass)
        res.redirect('/')
    }catch(err){
        res.send(registerTemplate(err.message))
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

app.post('/login',async (req,res)=>{
    console.log(req.body)
    if(await login(req.body.name, req.body.pass)){
        req.session.user = req.body.name
        res.redirect('/')
    }else{
        res.status(401).send('Unauthorized')
    }
})

app.listen(3000)