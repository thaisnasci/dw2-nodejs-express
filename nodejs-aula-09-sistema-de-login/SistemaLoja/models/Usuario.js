import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//CRIANDO O MODEL DE USUARIO
const Usuario = connection.define("usuarios", {
  email: {
    type: Sequelize.STRING,
    allownull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allownull: false,
  },
});

Usuario.sync({ force: false });

export default Usuario;
