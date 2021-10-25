/**
 *
 * Importações e Definições
 *
 **/
const express = require("express");
const app = express();
//Definindo porta
const port = 3000;
// importando módulo path
const path = require("path");
//Importando o method-override para lidar com forms por put/delete
//*?_method=PUT
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

/**
 *
 * Importando e instanciandoas rotas
 *
 **/

// importando as rotas principais
const indexRouter = require("./routes");
const adminRouter = require("./routes/admin");
const authRoutes = require("./routes/auth");

/**
 *
 *
 * Configurando EJS
 *
 **/

//Instanciando como view engine
app.set("view engine", "ejs");
//Instanciando pasta views
app.set("views", path.resolve("src", "views"));

/**
 *
 *
 *  Middlewares
 *
 *
 */
//liberando acesso a pasta public
app.use(express.static(path.resolve("src", "public")));
//Configurando recebimento de JSON
app.use(express.json());
//Configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }));
/**
 *
 *
 *  Rotas
 *
 *
 */
app.use("/admin", adminRouter);
app.use("/", indexRouter);
app.use("/auth", authRoutes);

// instanciando o server
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
