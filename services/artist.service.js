const Artist = require('../models/artist.model');

const createArtist = async(artistData) => {
    const artist = new Artist(artistData);
    await artist.save();
    return artist;
};

const getArtist = async () => {
    return await Artist.find({},'name birthplace gender');
};

module.exports = {
    createArtist,
    getArtist
};