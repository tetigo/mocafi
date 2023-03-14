
const router = require('express').Router()
const user = require('./user')
const company = require('./company')

router.use('/user',user)
router.use('/company',company)


module.exports=router