const Model = require('../model/model')

const express = require('express')
const router = express.Router()

router.post('/', async (req,res)=>{
    const data = new Model({name:req.body.name, age:req.body.age})
    try {
        const dataSaved = await data.save()
        res.status(200).json(dataSaved)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

router.get('/', async (req,res)=>{
    const data = await Model.find()
    try {
        res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.get('/byName', async (req,res)=>{
    const name = req.body.name
    const data = await Model.find({name})
    try {
        res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
router.get('/:id', async (req,res)=>{
    const data = await Model.findById(req.params.id)
    try {
        res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


router.patch('/:id', async (req,res)=>{
    const data = await Model.findById(req.params.id)
    if(!data) throw new Error('objeto não encontrado')
    try {
        data.name = req.body.name
        data.age = req.body.age
        const data2 = await data.save()
        res.status(200).json(data2)
    } catch (error) {
        res.status(500).message({message: error.message})
    }
})

router.delete('/:id',async (req,res)=>{
    const data = await Model.findById(req.params.id)
    if(!data) throw new Erro('objecto não encontrado')
    try {
        await data.delete()
        res.status(200)
    } catch (error) {
        res.status(500).message({message: error.message})
    }
})


module.exports=router