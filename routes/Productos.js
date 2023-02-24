const express = require("express");
const router = express.Router();

const ProductosController = require('../controllers/Productos')

router.get("/probando", ProductosController.probando);
router.post("/create", ProductosController.create);
router.get("/read", ProductosController.read);


module.exports = router;