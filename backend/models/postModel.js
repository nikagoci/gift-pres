const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        enum: ['Normal','Used'],
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
})

const postModel = mongoose.model('Post', postSchema)

module.exports = postModel