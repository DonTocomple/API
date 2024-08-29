const { Router } = require('express');
const { check } = require('express-validator');
const { createAlbumController, getAlbumController } = require('../controllers/album.controller');
const validateFields = require('../middlewares/validate-fields');
const router = Router();

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('duration', 'La duracion es obligatorio').not().isEmpty(),
        check('release_date', 'La fecha de salida es obligatoria').isDate(),
        validateFields
    ],
    createAlbumController
);

router.get('/', getAlbumController);

module.exports = router;