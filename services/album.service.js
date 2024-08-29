const Album = require('../models/album.model');

const createAlbum = async(albumData) => {
    const album = new Album(albumData);
    await album.save();
    return album;
};

const getAlbum = async () => {
    return await Album.find({},'title duration release_date');
};

module.exports = {
    createAlbum,
    getAlbum
};