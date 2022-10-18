const http = require('http')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Set-Cookie':'theme=dark'
    })
    res.write('Hello')
    res.end()
});

server.listen(3500)