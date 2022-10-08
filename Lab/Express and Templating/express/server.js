const express = require('express');
const exphbs = require('express-handlebars')
const handlebars = exphbs.create({extname:'.hbs'})

//registering controllers
const catalogController = require('./controllers/catalogController')
const createController = require('./controllers/createController')

//registering middlewares
const logger = require('./middleware/logger')
const app = express();
app.engine('.hbs',handlebars.engine)
app.set('view engine','.hbs')

app.get('/',(req,res)=>{
   res.render('home',{
       username: 'Peter'
   })
})

//Application level middleware
app.use(logger())

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