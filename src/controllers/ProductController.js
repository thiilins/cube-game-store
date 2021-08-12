const path = require("path");
const ProductController = {
  product: (req, res) => {
    res.render("pages/product", { page: "Produto" });
  },
  category: (req, res) => {
    // res.render("pages/category", { page: "Categoria" });
    res.sendFile(path.resolve(__dirname, "..", "views", "category.html"));
  },
};
module.exports = ProductController;
