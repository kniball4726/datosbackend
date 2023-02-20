require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 3901;


const server = () => {
    console.log('Iniciando servidor en el puerto: '+port)
    if(app.listen(port, ()=>{})){
        console.log('Servidor escuchando por el puerto: '+port)
    }else{
        console.log('Servidor no conectado')
    }
}

module.exports = server;