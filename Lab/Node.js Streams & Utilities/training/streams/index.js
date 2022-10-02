const http = require('http')

const server = http.createServer((req,res)=>{
        if(req.method === "POST"){
            const body = []
            req.on('data', (chunk)=>{
                body.push(chunk)
            })
            req.on('end',()=>{
                console.log(body.join(''))
                res.end()
            })
            
        }else{
            res.write('ok')
            res.end()
        }
})
    
server.listen(3000)