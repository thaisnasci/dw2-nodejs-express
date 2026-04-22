import express from "express";
const router = express.Router();

import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";
// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
   // Fazendo INNER JOIN para trazer as informações do Cliente Junto com as informações do Pedido
Pedido.findAll({
  include: [
    {
      model: Cliente, //Inclui o modelo Cliente relacionado
      required: true,//Garante que somente pedidos com clientes relacionados sejam retornados
    }
  ]
}).then(pedidos =>{
  res.render("pedidos", {
    pedidos:pedidos
  })
}).catch(error => {
  console.log(`Ocorreu um erro ao listar os pedidos. ${error}`)
});
});



export default router;
