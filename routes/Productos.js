const express = require("express");
const router = express.Router();

const ProductosController = require("../controllers/Productos.js")

router.post("/create", ProductosController.create);
router.get("/read", ProductosController.read);


module.exports = router;