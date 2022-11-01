const express = require('express');

const app = express();

//the server takes the information from static folder and send to us
app.use(express.static('static'))

app.listen(3000)