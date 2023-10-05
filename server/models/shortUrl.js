const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.parse(Date.now())
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema);