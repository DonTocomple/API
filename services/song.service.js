const Song = require('../models/song.model');

const createSong = async(songData) => {
    const song = new Song(songData);
    await song.save();
    return song;
};

const getSong = async () => {
    return await Song.find({},'title duration release_date');
};

module.exports = {
    createSong,
    getSong
};