const express = require("express");
// importando módulo router
const router = express.Router();
// importando o controller principal
const IndexController = require("../controllers/IndexController");
//definindo as rotas principais
router.get("/", IndexController.index);
router.get("/home", IndexController.indexRedirect);
router.get("/login", IndexController.login);
router.get("/loginTest", IndexController.loginTest);
router.get("/minha-conta", IndexController.account);

module.exports = router;
