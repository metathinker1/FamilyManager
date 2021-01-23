const mongoose = require('mongoose')

// TODO: Consider: betweenType: enum
// TODO: Add array types: futureDates, sendDates
const workitemGeneratorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    member: {
        type: String,
        required: false
    },
    startDate: {
        type: Date,
        required: true
    },
    betweenType: {
        type: String,
        required: true
    },
    numBetween: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('WorkitemGenerator', workitemGeneratorSchema)
