const Genre = require('../models/genre.model');

const createGenre = async(genreData) => {
    const genre = new Genre(genreData);
    await genre.save();
    return genre;
};

const getGenre = async () => {
    return await Genre.find({},'name description');
};

module.exports = {
    createGenre,
    getGenre
};