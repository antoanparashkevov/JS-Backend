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
const sessions = {}
function action( req,res ) {
    const cookies = parseCookie(req)
    const sessionId = cookies.sessionId || (Math.random() * 9999).toString(16)
    const session = sessions[sessionId] || {}
    sessions[sessionId] = session
    let visited = 0;
    visited++
    session.visited = (session.visited || 0) + 1
    res.writeHead(200,{
        'Set-Cookie':`sessionId=${sessionId}; httpOnly`
    })
    res.write(`
        <p>You visited ${session.visited} times.</p>
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