const {Router} = require('express')

const router = Router()

router.get('/',(req,res)=>{
    res.send(`
    <form method="post">
    <input type="text" name="name">
    <button>Send</button>
    </form>
    `)
})

router.post('/',(req,res)=>{
    console.log('handling POST request')
    res.status(201).send('Item sent successfully')
    res.end()
})

module.exports = router