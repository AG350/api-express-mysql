# REST API con Express y MySQL
## Sistema con validacion de usuarios, listado de peliculas y puntuacion de las mismas
## Comenzando 🚀
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
_

### Pre-requisitos 📋

_Para correr el programa nacesita instalar las librerias utilizadas_

```
 npm install
```
_Configurar datos de acceso a DB en db.js_
```
const sequelize = new Sequelize(
    '[user_name]',
    '[DB_name]',
    '[password]',
    {
        host: '[host]',
        dialect: '[DBMS]'
    }
);
```
### Instalación 🔧

_Una vez instaladas las librerias correr el siguiente comando en la consola

_Correr la aplicacion 

```
node app.js
```
_El servidor estara corriendo en el localhost:3000_

### Rutas a ser creadas para cada modulo 
#### Peliculas
- [x] /api/films (GET) - recuperar listado de peliculas 
- [x] /api/films (POST) - Crear un nuevo registro 
- [x] /api/films/:id (PUT) - editar el registro enviado por parametro 
- [X] /api/films/:id (DELETE) - eliminar el registro enviado por parametro 

#### Usuarios
- [ ] /api/users (GET) - recuperar listado de usuarios 
- [ ] /api/users (POST) - Crear un nuevo registro 
- [ ] /api/users/:id (PUT) - editar el registro enviado por parametro 
- [ ] /api/users/:id (DELETE) - eliminar el registro enviado por parametro 

## Librerias utilizadas:

 - Express
 - Body Parser
 - Sequelize
 - MySQL2
 - Nodemon