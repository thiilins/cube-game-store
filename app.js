const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.redirect("/");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/produto/:id?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "product.html"));
});
app.get("/categoria/:id?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "category.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
app.get("/account", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "account.html"));
});

app.listen(3000, () => {
  console.log("O servidor está rodando na porta 3000");
});
