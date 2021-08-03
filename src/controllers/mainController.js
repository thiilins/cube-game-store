//importando módulo path
const path = require("path");
const mainController = {
  index: (req, res) => {
    res.render("pages/home");
  },
  indexRedirect: (req, res) => {
    res.redirect("/");
  },
  product: (req, res) => {
    res.render("pages/product");
  },
  category: (req, res) => {
    res.render("pages/category");
  },
  login: (req, res) => {
    res.render("pages/login");
  },
  account: (req, res) => {
    res.render("pages/account");
  },
};
module.exports = mainController;
