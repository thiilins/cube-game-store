const express = require("express");
const app = express();
//Definindo porta
const port = 3000;
// importando módulo path
const path = require("path");

/* importando e instanciandoas rotas */
// importando as rotas principais
const indexRouter = require("./src/routes");
app.use("/", indexRouter);
// importando as rotas de produtos
const productRouter = require("./src/routes/products");
app.use("/produto", productRouter);

//Configurando EJS
//Instanciando como view engine
app.set("view engine", "ejs");
//Instanciando pasta views
app.set("views", path.resolve("src", "views"));

//liberando acesso a pasta public
app.use(express.static(path.resolve("src", "public")));

//Configurando recebimento de JSON
app.use(express.json());

//Configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }));

// instanciando o server
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
