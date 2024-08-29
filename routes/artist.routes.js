const { Router } = require('express');
const { check } = require('express-validator');
const { createArtistController, getArtistController } = require('../controllers/artist.controller');
const validateFields = require('../middlewares/validate-fields');
const router = Router();

router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('birthplace', 'El lugar de nacimiento es obligatorio').not().isEmpty(),
        check('gender', 'El genero del artista es obligatorio').not().isEmpty(),
        validateFields
    ],
    createArtistController
);

router.get('/', getArtistController);

module.exports = router;