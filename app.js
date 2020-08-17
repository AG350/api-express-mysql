//librerias requerias
const express = require('express');
const bodyParser = require('body-parser');

//instancias de rutas
const apiRoutes = require('./routes/api')

// Instancia de la aplicacion
const app = express();

//instancia de la BD
require('./db');

// para recibir peticiones post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//ruta raiz
app.use('/api', apiRoutes)

//Servidor escuchando
app.listen(3000,()=>{
    console.log('Servidor corriendo en puerto 3000');
});