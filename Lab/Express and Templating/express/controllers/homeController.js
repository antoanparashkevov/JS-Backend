const router = require('express').Router();


router.get('/',(req,res)=>{
    res.render('pages/home', {
        username: 'Peter'
    })
})

module.exports = router