const OrderController = {
  CreateOrderPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "orders/create",
        page: "Adicionar Pedido",
      });
    } catch (error) {
      console.log(error);
    }
  },
  listOrderPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "orders/list",
        page: "Pedidos",
      });
    } catch (error) {
      console.log(error);
    }
  },
  viewOrderPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "orders/view",
        page: "Pedido:",
      });
    } catch (error) {
      console.log(error);
    }
  },
  EditOrderPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "orders/edit",
        page: "Editar Pedido:",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createOrder(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async editOrder(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async deleteOrder(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = OrderController;
