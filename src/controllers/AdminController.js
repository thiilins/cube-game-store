const AdminController = {
  dashboardPage(req, res) {
    res.render("admin/dashboard", {
      file: "partials/index",
      page: "Painel Administrativo",
    });
  },
};
module.exports = AdminController;
