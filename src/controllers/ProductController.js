const path = require("path");
const ProductController = {
  product: (req, res) => {
    res.render("pages/product", { page: "Produto" });
  },
  category: (req, res) => {
    // res.render("pages/category", { page: "Categoria" });
    res.render("pages/maintenance");
  },
};
module.exports = ProductController;
