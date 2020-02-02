const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item