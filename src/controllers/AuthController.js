const { Usuario } = require("../models");
const crypto = require("../middlewares/crypto");
const AuthController = {
  loginPage(req, res) {
    res.render("auth/login", { page: "Login" });
  },
  registerPage(req, res) {
    res.render("auth/register", { page: "Cadastre-se" });
  },
  async register(req, res) {
    try {
      const { nome, sobrenome, email, senha } = req.body;
      const hash = crypto.create(senha);
      const user = await Usuario.create({
        nome,
        sobrenome,
        nome_social: null,
        avatar: null,
        email,
        senha: hash,
        tipo_usuario: 0,
        nascimento: null,
        quant_pedidos: 0,
        ativo: 1,
      });
    } catch (error) {
      console.log(error);
      return res.render("auth/register", {
        error:
          "Ops! Não conseguimos finalizar sua solicitação no momento, tente novamente!",
      });
    }
  },
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const user = await Usuario.findOne({ where: { email: email } });
      const hash = user.senha;
      if (!user || !crypto.validate(senha, hash)) {
        return res.render("auth/login", {
          page: "Login",
          error: "Usuário ou Senha inválidos por favor tente novamente",
        });
      }
      req.session.user = user;
      if (user.tipo_usuario) {
        return res.redirect("/admin");
      } else {
        return res.redirect("/");
      }
    } catch (error) {
      console.log(error);
      res.render("auth/login", {
        page: "Login",
        error:
          "Ops! Não foi possível atender sua solicitação no momento, por favor tente novamente!",
      });
    }
  },
  logout(req, res) {
    res.clearCookie();
    delete req.session.user;
    return res.redirect("/login");
  },
};
module.exports = AuthController;
