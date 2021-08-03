//importando módulo path
const path = require("path");
const mainController = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "home.html"));
  },
  indexRedirect: (req, res) => {
    res.redirect("/");
  },
  product: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "product.html"));
  },
  category: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "category.html"));
  },
  login: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "login.html"));
  },
  account: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "account.html"));
  },
};
module.exports = mainController;
