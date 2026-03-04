//Objetos Literais no JAvascript
document.write(`<h4>Objetos literais possuem Atributos 
(propriedades) e Métodos (Funções) </h4>`);
const pessoa = [];
document.write(typeof pessoa);
//Criando um objeto
const carro = {
  //Propriendades
  modelo: "gol",
  cor: "vermelho",

  //Métodos
  acelerar() {
    return "Vrummmmm...";
  },
  frear() {
    return "Freando...";
  },
};
document.write(`<p>O modelo do carro é: ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é: ${carro.cor}</p>`);
document.write(`<p>Quando o carro acelerar ele faz: ${carro.acelerar()}</p>`);
document.write(`<p>Ativando os Freios: ${carro.frear()}</p>`);

//Manipulando arrays de objetos
const productlist = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento.",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultraresistente.",
  },
];
//Exibindo o array de objetos através do foreach
document.write("<h4>Exibindo o array de objetos atraves do forEach</h4>");
productlist.forEach((product) => {
  document.write(`
        produto: ${product.nome}<br>
        marca: ${product.marca}<br>
        preco: ${product.preco}<br>
        descricao: ${product.descricao}<br>
        `);
});
