// Importando o Express
// const express = require("express")
import express from "express";
// Importando o express Flash
import flash from "express-flash";

// Importando o Controller de Cliente (onde estão as rotas)
// ClienteController
import ClienteController from "./controllers/ClienteController.js";

// PedidoController
import PedidoController from "./controllers/PedidoController.js";

// ProdutoController
import ProdutoController from "./controllers/ProdutoController.js";

// UsuarioController
import UsuarioController from "./controllers/UsuarioController.js";

// Importando o EXPRESS-SESSION (gerador de sessões do express)
import session from "express-session";

// Importando o arquivo de conexão com o banco
import connection from "./config/sequelize-config.js";

// Importando os Models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";

// Importando o Model de Usuário
import Usuario from "./models/Usuario.js";

// Importando as Associações
import associations from "./config/associations.js";

// Importando o Middleware de Autenticação
import Auth from "./middlewares/Auth.js";

// Realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco. ${error}`);
  });

// Criando o banco de dados (somente se ainda não existir)
connection
  .query("CREATE DATABASE IF NOT EXISTS loja_relacional;")
  .then(() => {
    console.log("O banco de dados está criado!");
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
  });

// Invocando a função que cria as associações
associations();

// Sicronizando os Models de Cliente e Pedido
// Transformando as funções em PROMESSAS
Promise.all([Cliente.sync({ force: false }), Pedido.sync({ force: false })])
  .then(() => {
    console.log("Entidades criadas e relacionadas com sucesso!");
  })
  .catch((error) => {
    console.log("Ocorreu um erro ao sincronizar os Models." + error);
  });

// Iniciando o Express
const app = express();

// Configurando o express-flash
app.use(flash());
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));
// Configurando o Express para aceitar dados vindo de formulários
app.use(express.urlencoded({ extended: false }));

// Configurando a sessão de Usuário
app.use(
  session({
    secret: "minhalojasecret",
    cookie: { maxAge: 3600000 }, // Sessão expira em 1 hora
    saveUninitialized: false, // Não salva sessões vazias (sem informações)
    resave: false, // Evita que re-salve sessões
  }),
);

// Ativando o uso das ROTAS
app.use("/", ClienteController);
app.use("/", PedidoController);
app.use("/", ProdutoController);
app.use("/", UsuarioController);

// ROTA PRINCIPAL
app.get("/", Auth, function (req, res) {
  res.render("index", {
    // Coletando a flash message
    messages: req.flash(),
  });
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
