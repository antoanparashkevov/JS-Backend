const {Router} = require('express')

const router = Router()

router.get('/',(req,res)=>{
   res.render('pages/create', {
       method: 'post',
       action: '/create'
   })
})

router.post('/',(req,res)=>{
    console.log('handling POST request')
    res.status(201).send('Item sent successfully')
    res.end()
})

module.exports = router