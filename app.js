const express = require("express");
const app = express();
// importando módulo path
const path = require("path");
// importando as rotas principais
const rotas = require("./src/routes");
app.use(rotas);
//Configurando EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
//liberando acesso a pasta public
app.use(express.static(path.resolve("public")));
// instanciando o server
app.listen(3000, () => {
  console.log("O servidor está rodando na porta 3000");
});
