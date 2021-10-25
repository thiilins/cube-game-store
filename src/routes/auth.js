const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

// Exibir páginas de login e Registro
router.get("/entrar", AuthController.loginPage);
router.get("/cadastre-se", AuthController.registerPage);
router.get("/logout", AuthController.logout);
// Efetuar login e Registro (POST)
router.post("/login", AuthController.login);
router.post("/register", AuthController.loginPage);

module.exports = router;
