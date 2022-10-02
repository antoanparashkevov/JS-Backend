const fs = require('fs')

const stream = fs.createReadStream('./text.txt')


const file = [];
stream.on('data',chunk => {
     console.log('chunk:',chunk.toString())
     file.push(chunk)
})

stream.on('end',()=>{
    console.log('status: file completed')
    console.log('whole file:',file.join(''))
})