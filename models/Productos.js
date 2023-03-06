const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema(
    {
        codigo: {
            type: Number,
            require: true
        },
        producto: {
            type: String,
            require: true
        },
        imagen: {
            type: String,
            default: "default.png"
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Producto", ProductoSchema,"productos")
