const AdminController = {
  dashboardPage(req, res) {
    res.render("admin/dashboard", {
      file: "index",
      page: "Painel Administrativo",
    });
  },
};
module.exports = AdminController;
