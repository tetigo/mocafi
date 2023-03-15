require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const mongoString=process.env.MONGODB_URI

console.log('@@@', mongoString)

const PORT = 3333
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(PORT,()=>{
    console.log(`Server started at: ${PORT}`)
})

mongoose.connect(mongoString).then(conn=>database=conn.connection)


mongoose.connection.on('error',(error)=>{console.log(error)})
mongoose.connection.once('connected',()=>{console.log('database connected')})

module.exports=app