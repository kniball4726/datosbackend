const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const app = express();
app.use(cors());

//const servercon = require('./config/servercon');
const database = require('./config/database');


console.log('Iniciando Api Rest | Starting ApiRest');

//Creando servidor
const port = process.env.PORT || 3901;

console.log('Iniciando Servidor')

if (app.listen(port, () =>{})){
        console.log('Servidor escuchando por el puerto: '+port)
    }else{
        console.log('Servidor no conectado')
    }

//servercon();
database();

//rutas
const rutas = require("./routes/Productos");
app.use("/api", rutas)
