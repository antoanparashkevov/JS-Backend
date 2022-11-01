const express = require('express');

const app = express();

//the server takes the information from static folder and send to us
app.use(express.static('static'))
app.use(express.json());

const data = [
    {
        name: 'Bulb lights',
        desc: 'For cars'
    },
    {
        name: 'Exhaust',
        desc: 'simple desc'
    }
]

app.get('/data', (req,res)=>{
    console.log('handling the request...')
    res.json(data)
    res.end();
})

app.post('/data', (req,res) =>{
    const formData = req.body;
    console.log('formData', formData)
    data.push(formData)
    res.status(201).end();
})

app.listen(3000)