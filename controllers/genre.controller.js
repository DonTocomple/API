const { response } = require('express');
const { createGenre, getGenre } = require('../services/genre.service');
const createGenreController = async (req, res = response) => {
    try {
        const genre = await createGenre(req.body);
        res.status(201).json({
            ok: true,
            genre
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create genre failed'
        });
    }
};
const getGenreController = async (req, res = response) => {
    try {
        const genre = await getGenre();
        res.status(200).json({
            ok: true,
            genre
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get genre failed'
        });
    }
};
module.exports = {
    createGenreController,
    getGenreController
};
