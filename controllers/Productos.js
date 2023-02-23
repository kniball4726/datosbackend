const validar = require("validator");
const Articulo = require("../models/Productos");

const create = (req, res) => {
    //Recoger parametros por post a guardar
    let parametros = req.body;

    //validar datos
    try{
        const validarTitulo = !validar.isEmpty(parametros.titulo)
        const validarContenido = !validar.isEmpty(parametros.contenido)
        
        if(!validarTitulo || !validarContenido){
            throw new Error("No se ha validado la informacion");
        }

    }catch(error){
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos"
    })
}
        
    //crear objeto a guardar en bd
    const producto = new Producto(parametros);
    //guardando datos en bd
    producto.save((error, productoGuardado) => {
        if(error || !productoGuardado){
            return res.status(400).json({
                status:"error",
                mensaje:"No se ha guardado el producto"
            })
        }else{
            return res.status(200).json({
                satatus:"succes",
                articulo: productoGuardado,
                mensaje: "Producto guardado con exito"
            })
        }
    });

    return res.status(200).json({
        mensaje: "Guardado con exito",
        parametros
    })

    
}

const read = (req, res) => {
    return res.status(200).json({
        mensaje: "Probando",
      })}

module.exports = {
     create,
     read
}