const server = require('./config/server');
const database = require('./config/database')
console.log('Iniciando Api Rest');

//Conectando Servidor
server();

//Conectando Base de datos
database();
