const {Schema , model} = require('mongoose');

const ProductosSchema = Schema({
    codigo: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    imagen:{
        type: String,
        default: "product.png"
    }
});

module.exports = model("Productos", ProductosSchema,"productos");

