const express = require("express");
// importando módulo router
const routes = express.Router();
// importando o controller principal
const mainController = require("../controllers/mainController");
//definindo as rotas principais
routes.get("/", mainController.index);
routes.get("/home", mainController.indexRedirect);
routes.get("/produto/:id?", mainController.product);
routes.get("/categoria/:id?", mainController.category);
routes.get("/login", mainController.login);
routes.get("/minha-conta", mainController.account);
module.exports = routes;
