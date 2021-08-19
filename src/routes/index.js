const express = require("express");
// importando módulo router
const router = express.Router();
// importando o controller principal
const MainController = require("../controllers/MainController");
//definindo as rotas principais
router.get("/", MainController.index);
router.get("/home", MainController.indexRedirect);
router.get("/login", MainController.login);
router.get("/loginTest", MainController.loginTest);
router.get("/minha-conta", MainController.account);
router.get("/checkout", MainController.checkout);
router.get("/cart", MainController.cart);
module.exports = router;
