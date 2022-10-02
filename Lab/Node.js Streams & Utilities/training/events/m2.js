const {emitter} = require('./observer')

let counter = 0;


//publisher
setInterval(()=>{
    emitter.emit('click',counter);
    counter++ 
},2000)