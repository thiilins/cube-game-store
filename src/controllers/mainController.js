//importando módulo path
const path = require("path");
const mainController = {
  index: (req, res) => {
    res.render("pages/home", { page: "Home" });
  },
  indexRedirect: (req, res) => {
    res.redirect("/");
  },
  product: (req, res) => {
    res.render("pages/product", { page: "Produto" });
  },
  category: (req, res) => {
    res.render("pages/category", { page: "Categoria" });
  },
  login: (req, res) => {
    res.render("pages/login", { page: "Login" });
  },
  account: (req, res) => {
    res.render("pages/account", { page: "Minha Conta" });
  },
};
module.exports = mainController;
