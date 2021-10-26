const ProductController = {
  createProductPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "products/create",
        page: "Adicionar Produto",
      });
    } catch (error) {
      console.log(error);
    }
  },
  listProductPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "products/list",
        page: "Produtos",
      });
    } catch (error) {
      console.log(error);
    }
  },
  viewProductPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "products/view",
        page: "",
      });
    } catch (error) {
      console.log(error);
    }
  },
  editProductPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "products/edit",
        page: "Editando:",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createProduct(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async editProduct(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProduct(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = ProductController;
