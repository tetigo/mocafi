
const router = require('express').Router()
const user = require('./user')
const company = require('./company')

router.use('/user',user)
router.use('/company',company)
router.use('/', (req,res)=>{
    return res.json({"OK":"OKOKOK"})
})


module.exports=router