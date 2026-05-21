// Controller de Usuário
import exepress from "express";
const router = exepress.Router();
// Importando o Model
import Usuario from "../models/Usuario.js";
// Importando o BCRYPT (hash de senha)
import bcrypt from "bcrypt";
import flash from "express-flash";

// Rota de Login
router.get("/login", (req, res) => {
  res.render("login", {
    // Coletando as Mensagens
    messages: req.flash(),
    loggedOut: true,
  });
});

// Rota de Logout
router.get("/logout", (req, res) => {
  // Limpando a sessão
  req.session.usuario = undefined;
  res.redirect("/");
});

// Rota do Formulário de Cadastro do Usuário
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    // Recebendo as mensagens
    messages: req.flash(),
    loggedOut: true,
  });
});

// Rota de Criação de Usuário no Banco
router.post("/caduser", (req, res) => {
  // Coletando as Informações do Formulário
  const email = req.body.email;
  const senha = req.body.senha;
  // Verificando se usuario já existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // Se não houver um usuario igual
    if (usuario == undefined) {
      // Aqui será feito o hash de senha
      // Criando "sal" do hash
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(senha, salt);

      // Enviando para o Banco
      Usuario.create({
        email: email,
        senha: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log("Não foi possível cadastrar o usuário" + error);
        });
    } else {
      // Enviando o Alerta
      req.flash("danger", "O usuário já está cadastrado! Faça o login.");
      res.redirect("/cadastro");
    }
  });
});

// Rota de Autenticação (Login)
router.post("/autenticacao", (req, res) => {
  // Capturar os dados do Formulário de Login
  const email = req.body.email;
  const senha = req.body.senha;
  // Buscando o Usuario no Banco
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // Se o Usuario existir
    if (usuario != undefined) {
      // valida a senha
      const correct = bcrypt.compareSync(senha, usuario.senha);
      // se a senha for válida
      if (correct) {
        // Autoriza o login
        // Cria a Sessão para Usuário
        req.session.usuario = {
          // Inserindo as informações do usuário na sessão
          id: usuario.id,
          email: usuario.email,
        };
        // res.send(
        //   `Sessão do usuário criada com sucesso!<br> ID do Usuário logado: ${req.session.usuario["id"]}<br>E-mail do Usuário logado: ${req.session.usuario['email']}`);
        // Enviando alerta de sucesso
        req.flash("success", "Login efetuado com sucesso!");
        res.redirect("/");
      } else {
        // Se a senha estiver incorreta
        req.flash("danger", "A senha informada está incorreta! Tente novamente.");
        res.redirect("/login");
      }
    } else {
      // Caso o Usuario não existe
      req.flash("danger", "O usuário informado não existe! Verifique os dados e tente novamente.");
      res.redirect("/login");
    }
  });
});

// Exportando o Módulo
export default router;
