// Forma de Importar CommonJS (antiga)
// const express = require("express");

// Importando o Express com ES6 Modules (nova)
import express from "express";

// Método do Express usado para criar as rotas da aplicação
const router = express.Router();

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// Importando o Middleware de Autenticação
import Auth from "../middlewares/Auth.js"

// ROTA CLIENTES
router.get("/clientes", Auth, function (req, res) {
  // const clientes = [
  //   {
  //     nome: "Ana Silva",
  //     cpf: "123.456.789-00",
  //     endereco:
  //       "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678",
  //   },
  //   {
  //     nome: "Pedro Almeida",
  //     cpf: "987.654.321-00",
  //     endereco:
  //       "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
  //   },
  //   {
  //     nome: "Marina Oliveira",
  //     cpf: "456.789.123-00",
  //     endereco:
  //       "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
  //   },
  //   {
  //     nome: "Rafael Santos",
  //     cpf: "321.654.987-00",
  //     endereco:
  //       "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
  //   },
  // ];

  // Aqui iremos chamar o model "Cliente", invocar o método findAll() para buscar todos os registros da tabela de cliente
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao buscar os clientes." + error);
    });
});

// Rota de Cadastro de Clientes (subrota / cadastrar)
router.post("/clientes/cadastrar", Auth, (req, res) => {
  // Criando as Variáveis que irão armazenar os dados vindos do Formulario
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Enviando os dados para o banco
  // O método create cadastra informações no BD
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    // Se a promessa for bem sucedida o usuário será redirencionado para a página de clientes
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao cadastrar o cliente" + error);
    });
});

// Rota de Exclusão de Cliente
router.get("/clientes/excluir/:id", Auth, (req, res) => {
  // Capturando o parâmetro da rota
  const id = req.params.id;
  // Enviando o ID do cliente para apagar do banco de dados
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao excluir o cliente" + error);
    });
});

// Rota de Edição de Cliente
router.get("/clientes/editar/:id", Auth, (req, res) => {
  const id = req.params.id;
  // Buscando o cliente no Banco
  Cliente.findByPk(id).then((cliente) => {
    res.render("clienteEditar", {
      // Passando os dados do cliente para a página
      cliente: cliente,
    });
  });
});

// Rota de Alteração de Cliente
router.post("/clientes/alterar", (req, res) => {
  // Coletando os Dados do formulário
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  const id = req.body.id;
  // Alterando o Cliente no Banco
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      enderco: endereco,
    },
    { where: { id: id } },
  ).then(() => {
    res.redirect("/clientes")
  });
});

// Exportando o módulo para usá-lo em outro arquivo
export default router;