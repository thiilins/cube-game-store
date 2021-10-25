//importando módulo path
const path = require("path");
const MainController = {
  index: (req, res) => {
    res.render("pages/home", { page: "CUBE Game Store" });
  },
  indexRedirect: (req, res) => {
    res.redirect("/");
  },
  account: (req, res) => {
    res.render("pages/account", { page: "Minha Conta" });
  },
  loginRedirect: (req, res) => {
    res.redirect("/auth/login");
  },
  checkout: (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "views", "checkout.html"));
  },
  cart: (req, res) => {
    res.render("pages/cart", { page: "Carrinho" });
  },
  product: (req, res) => {
    res.render("pages/product", { page: "Produto" });
  },
  category: (req, res) => {
    // res.render("pages/category", { page: "Categoria" });
    res.render("pages/maintenance");
  },
};
module.exports = MainController;
