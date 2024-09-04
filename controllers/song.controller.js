const { response } = require('express');
const { createSong, getSong } = require('../services/song.service');
const createSongController = async (req, res = response) => {
    try {
        const song = await createSong(req.body);
        res.status(201).json({
            ok: true,
            song
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create song failed'
        });
    }
};
const getSongController = async (req, res = response) => {
    try {
        const song = await getSong();
        res.status(200).json({
            ok: true,
            song
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get song failed'
        });
    }
};
module.exports = {
    createSongController,
    getSongController
};
