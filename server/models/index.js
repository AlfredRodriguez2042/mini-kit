const mongoose = require('mongoose')

const { Schema } = mongoose

 const PhotoSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}
})

module.exports = mongoose.model('Task', PhotoSchema)