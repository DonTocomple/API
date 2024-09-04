const { Schema, model } = require('mongoose');

const GenreSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = model('Genre', GenreSchema);