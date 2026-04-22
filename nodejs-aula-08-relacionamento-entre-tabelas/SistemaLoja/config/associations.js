// Este arquivo irá criar as associações entre as tabelas
// Importando os modelos
import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

//Definindo a associação entre os models
const associations = () => {
    // Um cliente pode ter vários pedidos
    Cliente.hasMany(Pedido, {foreignKey: "clienteId"});
    // Um pedido pertence a um cliente
    Pedido.belongsTo(Cliente, {foreignKey: "clienteId"});
};
export default associations;