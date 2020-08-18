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

//crear una nueva pelicula
router.put('/:id', async (req,res) => {
    await Film.update(req.body, {
       where: { id: req.params.id } 
    });
    res.json({ success: 'Registro modificado'});
});

//eliminar una pelicula
router.delete('/:id', async (req,res)=>{
    await Film.destroy({
        where: {id: req.params.id}
    });
    res.json({success: 'se ha borrado la pelicula'});
});

module.exports = router;