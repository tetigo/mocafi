const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        firstName: String,
        lastName: String,
        phone: String,
    },
    
    account:{
        cardNumber: String,
        expiration: String,
        pin: String,
        balance: Number
    },
})
module.exports=mongoose.model('company', dataSchema)
