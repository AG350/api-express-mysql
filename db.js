const Sequelize = require('sequelize');

const FilmModel = require('./models/films');

const sequelize = new Sequelize(
    'MEYxa6UN2m',
    'MEYxa6UN2m',
    'OpQWrh5EKT',
    {
        host: 'remotemysql.com',
        dialect: 'mysql'
    }
);

const Film = FilmModel(sequelize,Sequelize);
sequelize.sync({force: false})
    .then(() => {
        console.log('Tablas sincronizadas');
    });

module.exports = {
    Film
}