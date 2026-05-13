//Controller de usuario
import express from "express";
const router = express.Router();
//Importando o model
import Usuario from "../models/Usuario.js";
//Importando o BCRYPT(hash Senha)
import bcrypt from "bcrypt";
import { where } from "sequelize";

//ROTA DE LOGIN thais
router.get("/login", (req, res) => {
  res.render("login");
});

//ROTA DO FORMULARIO DE CADASTRO DO USUARIO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

//Rota de Criação de usuarios no banco
router.post("/caduser", (req, res) => {
  //Coletando as informaçoes do formulario
  const email = req.body.email;
  const senha = req.body.senha;
  //Vericando se o usuario ja existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    //Se nao houver usuario igual
    if (usuario == undefined) {
      //Aqui sera feito o hash de senha
      //criando salt para o hash
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(senha, salt);
      //ENVIANDO PARA O BANCO
      Usuario.create({
        email: email,
        senha: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log("Não foi possível cadastrar o usuário." + error);
        });
      //Se houver um usuario com o mesmo email
    } else {
      res.send(`Usuario já cadastrado!
            <br><a href="/login">Faça o login.</a>`);
    }
  });
});

//ROTA DE AUTENTICAÇÃO (LOGIN)
router.post("/autenticacao", (req, res) => {
  //Capturando os dados do formulario de login
  const email = req.body.email;
  const senha = req.body.senha;

  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    //se usuario existir
    if (usuario != undefined) {
      //valida senha
      const correct = bcrypt.compareSync(senha, usuario.senha);
      // se a senha for valida
      if (correct) {
        //Autoriazar o login
        //CRIAR A SESSÃO PARA O LOGIN
        req.session.user = {
          id: usuario.id,
          email: usuario.email
        }
        //res.send(`Sessão do usuario criada com sucesso! <br>
         // Id do usuario logado: ${req.session.user['id']}<br>
         // Email do usuario logado: ${req.session.user['email']}`)
        res.redirect("/");
        // se a senha estiver incorreta
      } else {
        res.send(`Senha inválida!
                    <br><a href="/login">Tente Novamente.</a>`);
      }
      //SE a senha estiver incorreta
    } else {
      res.send(`O usuario informado não existe!
            <br><a href="/login">Tente novamente.</a>`);
    }
  });
});

export default router;
