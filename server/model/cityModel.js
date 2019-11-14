const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
        required: true
      },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('city', citySchema)