const validar = require("validator");
const Producto = require("../models/Productos");

const probando = (req, res) => {
    console.log('Endpoint de Prueba Ejecutandose')
    return res.status(200).json({
        nombre: 'Gregory Rodriguez',
        dni: 95777596
    });
}

const create = (req, res) => {
    //Recoger parametros por post a guardar
    let parametros = req.body;
    
    //validar datos
   try{
        const validarCodigo = validar.isEmpty(parametros.codigo)
        const validarProducto = validar.isEmpty(parametros.producto)
        
        if(validarCodigo || validarProducto){
            throw new Error("No se ha validado la informacion");
        }else{
            console.log("Datos validados con exito")
        }

    }catch(error){
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos"
    })
}
        
    //crear objeto a guardar en bd
    const productos = new Producto(parametros);
    //guardando datos en bd
    productos.save((error, productoGuardado) => {
        if(error || !productoGuardado){
            return res.status(400).json({
                status:"error",
                mensaje:"No se ha guardado el producto"
            })
        }else{
            return res.status(200).json({
                status:"succes",
                producto: productoGuardado,
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

const update = (req, res) => {

}

const deleted = (req, res) => {

}

module.exports = {
    probando,
    create,
    read,
    update,
    deleted
}