const {subscribe} = require('./observer')

subscribe('message', (data)=>{
    console.log('module 1 received',data)
})
subscribe('content', (data)=>{
    console.log('module 1 received',data)
})