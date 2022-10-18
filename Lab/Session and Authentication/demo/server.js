const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        let visited = 0;
        if(req.headers.cookie) {
            const cookies = Object.fromEntries(req.headers.cookie
                .split(';')
                .map(c=>c.trim())
                .map(c=>c.split('=')))
            
            console.log(cookies)
            if(cookies.visited) {
                visited = Number(cookies.visited)
            }
        }
        visited++
        res.writeHead(200,{
            'Set-Cookie':`visited=${visited}`
        })
        res.write('Hello')
        res.end()
    }else{
        res.writeHead(404);
        res.end
    }
});

server.listen(3500)