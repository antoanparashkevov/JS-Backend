const express = require('express');

const app = express();

//the server takes the information from static folder and send to us
app.use(express.static('static'))

app.get('/data', (req,res)=>{
    console.log('handling the request...')
    res.json([
        {
            name: 'Bulb lights',
            desc: 'For cars'
        },
            {
                name: 'Exhaust',
                desc: 'simple desc'
            }
        ])
    res.end();
})

app.listen(3000)