//importando módulo path
const path = require('path');
const mainController = {
  index: (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'views', 'home.html'));
    res.render('pages/home', { page: 'Home' });
  },
  indexRedirect: (req, res) => {
    res.redirect('/');
  },
  product: (req, res) => {
    res.render('pages/product', { page: 'Produto' });
  },
  category: (req, res) => {
    res.render('pages/category', { page: 'Categoria' });
  },
  loginTest: (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'views', 'login.html'));
  },
  account: (req, res) => {
    res.render('pages/account', { page: 'Minha Conta' });
  },
  login: (req, res) => {
    res.render('pages/login', { page: 'Login' });
  },
};
module.exports = mainController;
