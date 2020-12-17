const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        default: "Unknown"
    },
    birthday: {
        type: String,
        required: true,
        default: "2020-12-12"
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
        default: "Other"
    },  
    image: {
        type: String,
        default: "https://static1.squarespace.com/static/54b7b93ce4b0a3e130d5d232/54e20ebce4b014cdbc3fd71b/5a992947e2c48320418ae5e0/1519987239570/icon.png?format=1500w"
    },
    bio: String,
    introduction: String,
    specialty: {
        type: [String],
        enum: ["Photographer", "Fashion Designer", "Stylist", "Makeup Artist", "Model"],
        default: []
    }, 
    availability: {
        type: [String],
        enum: ["No", "Yes, across the country", "Yes, across the continent", "Yes, all over the world"],
        required: true,
        default: []
    },
    target: {
        type: [String],
        enum: ["Looking to collaborate", "Looking for co-workers"],
        required: true,
        default: []
    },
    area: {       
      location: [String]
    },
    follows: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Follower'
        }
    ],  
    username: {
        type: String,
        required: true,
        default: 'user',
        unique: true,
    },
    password: {
        type: String,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User
