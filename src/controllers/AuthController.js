const AuthController = {
  login(req, res, next) {
    res.render("pages/login", { page: "login" });
  },
};
module.exports = AuthController;
