//importando módulo path
const path = require("path");
const IndexController = {
  index: (req, res) => {
    res.render("pages/home", { page: "CUBE Game Store" });
  },
  indexRedirect: (req, res) => {
    res.redirect("/");
  },

  loginTest: (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "views", "login.html"));
  },
  account: (req, res) => {
    res.render("pages/account", { page: "Minha Conta" });
  },
  login: (req, res) => {
    res.render("pages/login", { page: "Login" });
  },
};
module.exports = IndexController;
