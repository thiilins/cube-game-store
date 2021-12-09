const { Fabricante, Categoria, Produto } = require("../models");

const ManufacturerController = {
  createManufacturerPage(req, res) {
    try {
      res.status(200).json();
      return res.render("/fabricantes/criar", {
        // Em qual página vai o fabricante mesmo?
        //   file: "categories/create",
        //   page: "Adicionar Categoria",
      });
    } catch (error) {
      console.log(error);
      res
        .status(200)
        .json({ error: "Ops! Não foi possível completar sua solicitação" });
    }
  },
  async listManufacturerPage(req, res) {
    try {
      return res.render("fabricantes", {
        //   file: "categories/list",
        //   page: "Categorias",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async viewManufacturerPage(req, res) {
    res.render("fabricantes/:id", {
      //   file: "categories/view",
      //   page: "",
    });
  },
  async editManufacturerPage(req, res) {
    try {
      return res.render("fabricantes/editar/:id", {
        //   file: "categories/edit",
        //   page: "Editando Categoria:",
      });
    } catch (error) {
      console.log(error);
    }
  },

  //Dúvida em relação à criação de novo fabricante;

  async createManufacturer(req, res) {
    try {
      const { nome, img_url, ativo } = req.body;

      const newManufacturer = await Manufacturer.create({
        nome,
        img_url,
        ativo: 1,
      });

      res.status(201).json();
    } catch (error) {
      console.log(error);
    }
  },
  async editManufacturer(req, res) {
    try {
      const { id } = req.params;

      const { nome, img_url, ativo } = req.body;

      //Será necessário saber se o usuário está logado para editar?

      const manufacturerUpdate = await Manufacturer.update(
        {
          nome,
          img_url,
          ativo,
        },
        { where: { id } }
      );
      return res.status(204).send();
    } catch (error) {
      console.log(error);
    }
  },
  async deleteManufacturer(req, res) {
    try {
      const { id } = req.params;

      const manufacturerDelete = await Manufacturer.destroy({
        where: { id },
      });

      res.status(204).send();
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = ManufacturerController;
