const router = require('express').Router();
const { Film } = require('../../db');

//obtener todas las peliculas
router.get('/', async (req,res) => {
    const films = await Film.findAll();
    res.json(films);
});

//crear una nueva pelicula
router.post('/', async (req,res) => {
    const films = await Film.create(req.body);
    res.json(films);
});

module.exports = router;