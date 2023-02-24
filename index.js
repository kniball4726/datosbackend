const express = require("express");
const cors = require('cors');
require ('dotenv').config();
//const server = require("./config/server");
//const database = require('./config/database');

const app = express();
app.use(cors());
console.log('Iniciando Api Rest | Starting ApiRest');

//Conectando Servidor
//coneccting server
//server();

//Conectando Base de datos
//connecting database
//database();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas

app.get('/probando', (req, res) => {
    console.log('Se ha ejecutado endpoint de prueba')
    return res.status(200).send(`
       <div>
        <h1>Probando rutas NodeJs</h1>
        <p>Creando API REST con NODEJS</p>
            <ul>
                <li>Home</li>
                <li>Nosotros</li>
                <li>Ubicanos</li>
            </ul>
       </div>
    
    `)
});

//Creando servidor
const port = process.env.PORT || 3901;

console.log('Iniciando Servidor')

if (app.listen(port, () =>{})){
        console.log('Servidor escuchando por el puerto: '+port)
    }else{
        console.log('Servidor no conectado')
    }

//rutas