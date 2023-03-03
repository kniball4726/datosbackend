const {Schema , model} = require('mongoose');

const ProductosSchema = Schema({
    codigo: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    }
});

module.exports = model("Productos", ProductosSchema);

