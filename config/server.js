require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3901;


const server = () => {
    app.listen(port, ()=>{ 
        console.log('Servidor escuchando por el puerto: '+port)
    });
}
module.exports = server;