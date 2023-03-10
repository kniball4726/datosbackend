require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = process.env.PORT || 3901;

const servercon = () => {
    if(app.listen(port, ()=>{})){
        console.log('Servidor escuchando por el puerto: '+port)
    }else{
        console.log('Servidor no conectado')
    }
}

module.exports = servercon;