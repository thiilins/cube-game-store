const express = require("express");
const app = express();
//Definindo porta
const port = 3000;
// importando módulo path
const path = require("path");
// importando as rotas principais
// importando e instanciandoas rotas
const indexRouter = require("./src/routes");
const productRouter = require("./src/routes/products");
app.use("/", indexRouter);
app.use("/produto", productRouter);

//Configurando EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
//liberando acesso a pasta public
app.use(express.static(path.resolve("public")));
// instanciando o server
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
