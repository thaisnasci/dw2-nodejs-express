import express from "express";

// Importando a bibloteca Multer
import multer from "multer";

import connection from "./config/sequelize-config.js";

import Galeria from "./models/Galeria.js";

const app = express();

connection.authenticate().then(() =>{
    console.log("Conexão com o banco realizada com sucesso!");
}).catch((error) =>{
    console.log(error);
});

connection.query("CREATE DATABASE IF NOT EXISTS galeria;").then(() =>{
    console.log("O banco de dados está criado!");
}).catch((error) =>{
    console.log(error);
});

// Configurando a pasta PUBLIC
app.use(express.static('public'));

// Configurando o EJS
app.set("view engine", "ejs");

// Configurando o Multer
const upload = multer({dest: "public/uploads/"})

app.get("/", (req, res) => {
    // Selecionando todas as imagens do banco
    Galeria.findAll().then(imagens => {
        res.render("index", {
            imagens: imagens
        });
    }).catch(error =>{
        console.log(error);
    });
});

// Rota de Upload
app.post("/upload", upload.single("file"), (req, res) => {
    // Gravando o nome do arquivo gerado pelo multer na Variavel "file"
    const file = req.file.filename;
    Galeria.create({
        arquivo: file
    }).then(() =>{
        res.redirect("/");
    }).catch(error =>{
        console.log("Não foi possível gravar o arquivo no banco de dados!" + error);
    });
});

const port = 8081;

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor! ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
