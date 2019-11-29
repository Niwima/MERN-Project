const mongoose = require('mongoose');
const itinerarySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hashtags: {
        type: String
    },
    activities: {
        type: Array
    }
})

module.exports = mongoose.model('itinerary', itinerarySchema)