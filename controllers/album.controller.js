const { response } = require('express');
const { createAlbum, getAlbum } = require('../services/album.service');
const createAlbumController = async (req, res = response) => {
    try {
        const album = await createAlbum(req.body);
        res.status(201).json({
            ok: true,
            album
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create album failed'
        });
    }
};
const getAlbumController = async (req, res = response) => {
    try {
        const album = await getAlbum();
        res.status(200).json({
            ok: true,
            album
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get album failed'
        });
    }
};
module.exports = {
    createAlbumController,
    getAlbumController
};
