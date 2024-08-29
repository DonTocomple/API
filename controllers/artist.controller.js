const { response } = require('express');
const { createArtist, getArtist } = require('../services/artist.service');
const createArtistController = async (req, res = response) => {
    try {
        const artist = await createArtist(req.body);
        res.status(201).json({
            ok: true,
            artist
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create user failed'
        });
    }
};
const getArtistController = async (req, res = response) => {
    try {
        const artist = await getArtist();
        res.status(200).json({
            ok: true,
            artist
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get artist failed'
        });
    }
};
module.exports = {
    createArtistController,
    getArtistController
};
