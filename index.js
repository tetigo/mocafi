// [index.js]

const express = require("express");

const port = process.env.PORT || 4000;
const app = express();

app.get('/hello-world', (request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
module.exports=app

// require('dotenv').config()
// const cors = require('cors')
// const express = require('express')
// const mongoose = require('mongoose')

// const routes = require('./routes')

// const mongoString=process.env.DATABASE_URL

// const PORT = 3333
// const app = express()

// mongoose.connect(mongoString)
// .then(
//     conn=>{
//         database = conn.connection
        
//         app.use(express.json())
//         app.use(cors())
//         app.use('/api', routes)
        
//         app.listen(PORT,()=>{
//             console.log(`Server started at: ${PORT}`)
//         })
//     }
// ).catch(
//     (error)=>console.log(error.message)
// )
// mongoose.connection.on('error',(error)=>{console.log(error)})
// mongoose.connection.once('connected',()=>{console.log('database connected')})

// module.exports=app