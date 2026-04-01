// Importando o Express
//const express = require("express")
import express from "express";
//Importando o controller de cliente
import ClienteController from "./controllers/ClienteController.js"
// importando o produto 
import ProdutoController from "./controllers/ProdutoController.js"
//
import PedidoController from "./controllers/PedidoController.js"
// Iniciando o Express
const app = express();
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

//Ativando o uso das ROTAS
app.use("/", ClienteController)
app.use("/", ProdutoController)
app.use("/", PedidoController)
// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});




// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
