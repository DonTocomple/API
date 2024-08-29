const { Schema, model } = require('mongoose');

const ArtistSchema = Schema({
    name: {
        type: String,
        required: true
    },
    birthplace: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

module.exports = model('Artist', ArtistSchema);