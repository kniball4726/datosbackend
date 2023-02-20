require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const db_uri = process.env.DB_URI;

const database = async() =>{
    console.log('Iniciando conexión a la base de datos');
    try{
       await mongoose.connect(db_uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        console.log('Conexión establecida con exito a la base de datos')
    }catch(error){
        throw new Error('No se puede conectar a la base de datos '+error)
    }
}

module.exports = database;