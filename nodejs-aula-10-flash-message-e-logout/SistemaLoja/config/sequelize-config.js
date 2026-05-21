// Importando a ORM Sequelize
import Sequelize from "sequelize";

// Definindo os dados de conexão com o banco de dados
const connection = new Sequelize({
  // Tipo do banco
  dialect: "mysql",
  // Endereço do banco
  host: "localhost",
  // Nome do usuário do banco
  username: "root",
  // Senha
  password: "",
  // Fuso Horáro
  timezone: "-03:00",
  // Nome do Banco que será usado na aplicação
  database: "loja_relacional",
});

// Exportando o módulo
export default connection;