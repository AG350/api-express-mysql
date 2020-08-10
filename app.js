//librerias requerias
const express = require('express');
const bodyParser = require('body-parser');

// Instancia de la aplicacion
const app = express();

require('./db');

app.use(bodyParser.json());
// para recibir peticiones post
app.use(bodyParser.urlencoded({extended: true}));

//ruta raiz
app.get('/', (req, res)=>{
    res.send('hola mundo');
})

//Servidor escuchando
app.listen(3000,()=>{
    console.log('Servidor corriendo en puerto 3000');
});