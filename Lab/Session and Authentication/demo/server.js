const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
       action(req,res)
    }else{
        res.writeHead(404);
        res.end
    }
});

server.listen(3500)

function action( req,res ) {
    const cookies = parseCookie(req)
    let visited = 0;
    visited++
    res.writeHead(200,{
        'Set-Cookie':`visited=${visited}; httpOnly`
    })
    res.write(`
        <p>You visited ${visited} times.</p>
        `)
    res.end()
}

function parseCookie( req ) {
    if(req.headers.cookie) {
        return Object.fromEntries(req.headers.cookie
           .split(';')
           .map(c => c.trim())
           .map(c => c.split('=')))
    }
    return {}
}