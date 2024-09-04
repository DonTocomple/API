const { Schema, model } = require('mongoose');

const SongSchema = Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    }
});

module.exports = model('Song', SongSchema);