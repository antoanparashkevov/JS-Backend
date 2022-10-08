const {Router} = require('express')

const router = Router()

//we can call Router also as a constructor
// const router = new Router()

router.get('/',(req,res)=>{
    res.render('pages/catalog')
})

router.get('/:productId',(req,res)=>{
   res.render('pages/details')
})


module.exports=router