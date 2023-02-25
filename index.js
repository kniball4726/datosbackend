const express = require("express");
const cors = require('cors');
require ('dotenv').config();
//const server = require("./config/server");
const database = require('./config/database');

const app = express();
app.use(cors());
console.log('Iniciando Api Rest | Starting ApiRest');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas hardcodeadas

app.get('/probando', (req, res) => {
    console.log('Se ha ejecutado endpoint de prueba')
    return res.status(200).json({
        nombre: 'Gregory',
        apellido: 'Rodriguez',
        dni: 95777596
    })
});

//Rutas


//Conectando Servidor
//coneccting server
//server();

//Conectando Base de datos
//connecting database
database();


//Creando servidor
const port = process.env.PORT || 3901;

console.log('Iniciando Servidor')

if (app.listen(port, () =>{})){
        console.log('Servidor escuchando por el puerto: '+port)
    }else{
        console.log('Servidor no conectado')
    }

//rutas