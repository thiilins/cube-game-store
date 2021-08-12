const express = require("express");
// importando módulo router
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.product);
router.get("/categoria", ProductController.category);

module.exports = router;
