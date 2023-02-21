const express = require("express");
const router = express.Router();

const ProductosController = require("../controllers/Productos.js")

router.post("/crear", ProductosController.crear);

module.exports = router;