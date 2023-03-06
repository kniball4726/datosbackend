const express = require("express");
const router = express.Router();
const ProductosController = require("../controllers/Productos");

router.post("/create", ProductosController.create);
router.get("/read", ProductosController.read);
router.get("/update", ProductosController.update);
router.delete("/deleted", ProductosController.deleted);

module.exports = router;