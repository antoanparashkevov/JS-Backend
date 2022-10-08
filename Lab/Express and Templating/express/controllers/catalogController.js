const {Router} = require('express')

const router = Router()

//we can call Router also as a constructor
// const router = new Router()

router.get('/',(req,res)=>{
    res.send('Welcome to catalog page')
})

router.get('/:productId',(req,res)=>{
    console.log(req.params)
    res.send('Welcome to product number ' + req.params.productId);
})


module.exports=router