const { Router } = require('express');
const { check } = require('express-validator');
const { createSongController, getSongController } = require('../controllers/song.controller');
const validateFields = require('../middlewares/validate-fields');
const router = Router();

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('duration', 'La duracion es obligatorio').not().isEmpty(),
        check('release_date', 'La fecha de salida debe ser una fecha').isDate(),
        validateFields
    ],
    createSongController
);

router.get('/', getSongController );

module.exports = router;