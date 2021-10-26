const { Usuario } = require("../models");

const UserController = {
  createUserPage(req, res) {
    try {
      res.render("admin/dashboard", {
        file: "users/create",
        page: "Adicionar Usuário",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async listUserPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "users/list",
        page: "Usuários",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async viewUserPage(req, res) {
    try {
      const { id } = req.params.id;
      const user = await Usuario.findByPk(id);
      return res.render("admin/dashboard", {
        file: "users/view",
        page: "",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editUserPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "users/edit",
        page: "Editando:",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createUser(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async editUser(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async deleteUser(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = UserController;
