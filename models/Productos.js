const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema(
    {
        codigo: {
            type: Number
        },
        producto: {
            type: String
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Producto", ProductoSchema,"productos")

/*const { Schema , model } = require('mongoose');

const ProductoSchema = Schema({
    codigo: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    }
});

module.exports = model("Producto", ProductoSchema,"productos");*/

