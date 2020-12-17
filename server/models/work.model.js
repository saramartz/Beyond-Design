const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "Untitled"
    },
    description: {
        type: String,
        required: true,
        default: "Lorem Ipsum"
    },    
    date: {
        type: String,
        default: "2020-12-09"
    },
    status: {
        type: [String],
        enum: ['In progress', "Completed"],
        default: []
    },
    image: {
        type: String,
        default: ""
    },
    coworkers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Coworker'      
        }
    ],
    board: {
        type: Schema.Types.ObjectId,
        ref: 'Board'    
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Work = mongoose.model('Work', workSchema)

module.exports = Work

//TO-DO upload documentation 
