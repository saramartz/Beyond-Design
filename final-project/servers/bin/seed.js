const mongoose = require('mongoose')
const User = require('../models/user.model')
const Work = require('../models/work.model')

const dbtitle = 'creativeApp'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

User.collection.drop()
Work.collection.drop()

const works = [
    {
        title: "Fashion Photoshoot",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: new Date(2020, 07, 11),
        status: "Completed",
        image: "https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        author: {
            "name": "Julia Volk",
            "birthday": new Date(1962, 07, 11),
            "gender": "Female",          
            "image": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "bio": "Lorem ipsum",
            "specialty": "Fashion",         
            "availability": "No",            
            "location": [40.400586, -3.690467],
            "username": "Volk_",
        },
        
    },
    {
        title: "Modeling Photoshoot",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: new Date(2020, 07, 11),
        status: "In progress",
        image: "https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        author: {
            "name": "Daria Shevtsova",
            "birthday": new Date(1962, 07, 11),
            "gender": "Female",          
            "image": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "bio": "Lorem ipsum",
            "specialty": "Photography",         
            "availability": "No",            
            "location": [40.400586, -3.690466],
            "username": "Shevtsova_",
        },
        
    },
]


Promise.all(works.map(work => User.create(work.author).then(author => author.name)))
    .then(() => works.map(work => User.findOne({ name: work.author.name }).then(author => Object.assign({}, work, { author: author._id }))))
    .then(findAuthors => Promise.all(findAuthors).then(works => works.map(work => Work.create(work))))
    .then(savedWorks => Promise.all(savedWorks).then(works => works.forEach(work => console.log(`Trabajo ${work.title} creado`))).then(() => mongoose.connection.close()))
    .catch(error => console.log('Error: ', error))