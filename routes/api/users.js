const router = require('express').Router();
const bcryp = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');

router.post('/register', [
    check('username', 'El Nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El Password es obligatorio').not().isEmpty(),
    check('email','Ingrese una direccion de correo valida').isEmail()
] ,async (req,res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json( {errores: errors.array()})
    }

    req.body.password = bcryp.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

})

module.exports = router