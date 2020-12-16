const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boardSchema = new Schema({
    title: String,
    images: [String],
    author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
    }  
}, {
    timestamps: true
})

const Board = mongoose.model('Board', boardSchema)
module.exports = Board