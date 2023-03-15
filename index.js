require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const mongoString=process.env.DATABASE_URL

const PORT = 3333
const app = express()

mongoose.connect(mongoString).then(conn=>{
    global.db=conn.connection
    app.use(express.json())
    app.use(cors())
    app.use('/api', routes)
    
    app.listen(PORT,()=>{
        console.log(`Server started at: ${PORT}`)
    })
})

mongoose.connection.on('error',(error)=>{console.log(error)})
mongoose.connection.once('connected',()=>{console.log('database connected')})

module.exports=app