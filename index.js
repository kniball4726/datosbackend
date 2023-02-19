require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = require('./config/server')
console.log("Iniciando App de Node");
const app = express();
app.use(cors());

//Cargando Servidor
server();