const Model = require('../model/model')

const express = require('express')
const {companyController} = require('../controller/company-controller')
const router = express.Router()

router.post('/', companyController.getBalance)


module.exports=router