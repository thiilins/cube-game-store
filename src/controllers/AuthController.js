const { Usuario } = require("../models");
const crypto = require("../helpers/crypto");
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
      req.session.user = {
        nome: user.nome,
        sobrenome: user.sobrenome,
      };
      if (user.tipo_usuario == 1) {
        req.session.user.admin = true;
        return res.redirect("/admin");
      } else {
        user.admin = false;
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
    req.session.destroy();
    return res.redirect("/login");
  },
};
module.exports = AuthController;
