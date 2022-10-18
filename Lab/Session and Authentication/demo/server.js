const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log(req.headers.cookie)
        if(req.headers.cookie) {
            const cookies = Object.fromEntries(req.headers.cookie
                .split(';')
                .map(c=>c.trim())
                .map(c=>c.split('=')))
            
            console.log(cookies)
        }
        res.writeHead(200,{
            'Set-Cookie':'visited=1'
        })
        res.write('Hello')
        res.end()
    }else{
        res.writeHead(404);
        res.end
    }
});

server.listen(3500)