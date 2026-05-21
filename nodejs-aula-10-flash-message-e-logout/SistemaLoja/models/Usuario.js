import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model de Usuário
const Usuario = connection.define("usuarios", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Usuario.sync({ force: false });

export default Usuario;