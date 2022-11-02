const express = require('express');

const app = express();
const port = 3000;
//the server takes the information from static folder and send to us
app.use(express.static('static'))
app.use(express.json());

const data = [
    {
        id: 'asdf1',
        name: 'Bulb lights',
        desc: 'For cars'
    },
    {
        id: 'asdf2',
        name: 'Exhaust',
        desc: 'simple desc'
    }
]

app.get('/data', (req,res)=>{
    res.json(data)
    res.end();
})

app.post('/data', (req,res) =>{
    const formData = req.body;
    const record = {
        id: ('999999'+(Math.random() * 9999).toString(16)).slice(-5),
        name: formData.name,
        desc: formData.desc,
    }
    data.push(record)
    res.status(201).json(record);
})

app.get('/data/:id', (req,res)=>{
    const id = req.params.id;
    const item = data.find(p=>p.id===id);
    if(item){
        res.json(item)
    }
})

app.delete('/data/:id', (req,res)=>{
    const id = req.params.id;
    const arrayIndex = data.findIndex(p=>p.id === id);
    data.splice(arrayIndex,1)
    res.end();
})

app.put('/data/:id', (req,res)=>{
    const id = req.params.id
    const item = data.find(p=>p.id === id)
    item.name = req.body.name;
    item.desc = req.body.desc
    
    res.status(202).end()
})

app.listen(port, ()=>console.log('Server listening on port ' + port))