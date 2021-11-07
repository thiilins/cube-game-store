const ManufacturerController = {
  createManufacturerPage(req, res) {
    try {
      res.status(200).json();
      // return res.render("admin/dashboard", {
      //   file: "categories/create",
      //   page: "Adicionar Categoria",
      // });
    } catch (error) {
      console.log(error);
      res
        .status(200)
        .json({ error: "Ops! Não foi possível completar sua solicitação" });
    }
  },
  async listManufacturerPage(req, res) {
    try {
      // return res.render("admin/dashboard", {
      //   file: "categories/list",
      //   page: "Categorias",
      // });
    } catch (error) {
      console.log(error);
    }
  },
  async viewManufacturerPage(req, res) {
    // res.render("admin/dashboard", {
    //   file: "categories/view",
    //   page: "",
    // });
  },
  async editManufacturerPage(req, res) {
    try {
      // return res.render("admin/dashboard", {
      //   file: "categories/edit",
      //   page: "Editando Categoria:",
      // });
    } catch (error) {
      console.log(error);
    }
  },
  async createManufacturer(req, res) {
    try {
      res.status(201).json();
    } catch (error) {
      console.log(error);
    }
  },
  async editManufacturer(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async deleteManufacturer(req, res) {
    try {
      res.status(204).send();
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = ManufacturerController;
