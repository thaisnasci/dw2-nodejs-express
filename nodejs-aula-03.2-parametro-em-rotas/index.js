//O arquivo idex.js é o arquivo principal do projeto

// Importado o MODULO do Express
const express = require("express");

//Criando uma instâcia do Express
const app = express();

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//CRIANDO A ROTA PRINCIPAL DO SITE("/")
app.get("/", function (req, res) {
  // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js</h1>");
  res.render("index");
});

//CRIANDO A ROTA DE PERFIL DO USUARIO
app.get("/perfil", function (req, res) {
  // res.send("<h2>Bem-vindo ao seu perfil</h2>");
  res.render("perfil");
});

//CRIANDO A ROTA DO CLIENTES
app.get("/clientes", (req, res) => {
  const listaClientes = [
    "Alice Souza",
    "Yuri Ferreira",
    "Paulo Molina",
    "Renata Ingrata",
  ];
  res.render("clientes", {
    listaClientes: listaClientes,
  });
});

//CRIANDO A ROTA DO CLIENTES COM PARAMETRO
app.get("/clientes/:cliente", (req, res) => {
  const cliente = req.params.cliente;
  res.render("infoCliente", {
    cliente : cliente,
  });
});

//CRIANDO A ROTA DO PRODUTOS
app.get("/produtos", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  res.render("produtos", {
    listaProdutos: listaProdutos,
  });
});

//CRIANDO A ROTA DO PRODUTOS - com parametros
app.get("/produtos/:produto", (req, res) => {
  const produto = req.params.produto;
  res.render("detalhesProduto", {
    produto: produto,
  });
});

//CRIANDO A ROTA DE SERVICOS
app.get("/servicos", function (req, res) {
  // res.send("<h2>Bem-vindo ao servicos</h2>");
  res.render("servicos");
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});
