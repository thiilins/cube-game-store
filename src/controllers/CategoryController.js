const CategoryController = {
  createCategoryPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "categories/create",
        page: "Adicionar Categoria",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async listCategoryPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "categories/list",
        page: "Categorias",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async viewCategoryPage(req, res) {
    res.render("admin/dashboard", {
      file: "categories/view",
      page: "",
    });
  },
  async editCategoryPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "categories/edit",
        page: "Editando Categoria:",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createCategory(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async editCategory(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async deleteCategory(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = CategoryController;
