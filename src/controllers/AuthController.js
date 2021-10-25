const AuthController = {
  login(req, res, next) {
    res.render("auth/login", { page: "login" });
  },
  register(req, res, next) {
    res.render("auth/register", { page: "login" });
  },
};
module.exports = AuthController;
