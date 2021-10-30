const { Categoria, Usuario, Produto } = require("../models");

const CategoryController = {
  createCategoryPage(req, res) {
    return res.render("admin/dashboard", {
      file: "categories/create",
      page: "Adicionar Categoria",
    });
  },
  async listCategoryPage(req, res) {
    try {
      const categories = await Categoria.findAll();
      return res.render("admin/dashboard", {
        file: "categories/list",
        page: "Categorias",
        categories,
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
      const { id } = req.params;
      const { nome } = req.body;
      let img_url = undefined;
      if (req.file && req.files != "undefined") {
        const { filename } = req.file;
        img_url = filename;
      }
      const category = await Categoria.update(
        {
          nome,
          img_url,
        },
        {
          where: { id },
        }
      );
      return res.status(200).json({
        category,
        msg: "Categoria Editada Com Sucesso",
      });
      // return res.redirect("/admin/categorias");
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
