const {Router} = require('express')
const {create} = require('../services/productService')
const router = Router()

router.get('/',(req,res)=>{
   res.render('pages/create', {
       method: 'post',
       action: '/create'
   })
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const enteredData = req.body
    create(enteredData.name,+enteredData.price)
    res.redirect('/catalog')
    
})

module.exports = router