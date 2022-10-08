const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('pages/about',{
        phoneNumber: '0877897323',
        employees: [
            {
                name: "John",
                role: 'Front-end'
            },
            {
                name: 'Julie',
                role: 'accountant'
            }
        ]
    })
})

module.exports = router;