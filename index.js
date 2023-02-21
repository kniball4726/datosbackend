const express = require('express');
const server = require('./config/server');
const database = require('./config/database');

const app = express();

console.log('Iniciando Api Rest | Starting ApiRest');

//Conectando Servidor
//coneccting server
server();

//Conectando Base de datos
//connecting database
database();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas
const rutasProductos = require("./routes/Productos.js");
app.use("/api", rutasProductos);

