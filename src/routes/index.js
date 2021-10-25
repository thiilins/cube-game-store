const express = require("express");
// importando módulo router
const router = express.Router();
// importando o controller principal
const MainController = require("../controllers/MainController");

//definindo as rotas principais
router.get("/", MainController.index);
router.get("/home", MainController.indexRedirect);
router.get("/login", MainController.loginRedirect);
router.get("/minha-conta", MainController.account);
router.get("/checkout", MainController.checkout);
router.get("/cart", MainController.cart);
router.get("/produto", MainController.product);
router.get("/produto/categoria", MainController.category);

module.exports = router;
