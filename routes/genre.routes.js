const { Router } = require('express');
const { check } = require('express-validator');
const { createGenreController, getGenreController} = require('../controllers/genre.controller');
const validateFields = require('../middlewares/validate-fields');
const router = Router();

router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('description', 'La descripcion es obligatoria').not().isEmpty(),
        validateFields
    ],
    createGenreController
);

router.get('/', getGenreController);

module.exports = router;