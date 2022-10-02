const {emitter} = require('./observer')

emitter.on('click',(data)=>{
    console.log('module 1 received', data)
})