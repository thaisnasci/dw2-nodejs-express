//DECLARANDO E EXIBINDO ITENS DE UM ARRAY
let produtos = [];
document.write(typeof produtos);

let products = ["Computadores", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);

document.write(`<p>Exibindo os elementos do vetor através do índice:</p>`);
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

document.write(`<p>Exibindo elementos do vetor através do forEach:</p>`);
products.forEach(function (products) {
  document.write(`<p>${products}</p>`);
});

document.write(
  `<p>Exibindo elementos do vetor através do forEach como os indices:</p>`,
);
products.forEach((products, i) => {
  document.write(`<p>${i+1} - ${products}</p>`);
});

//METODOS DE MANIPULAÇÃO DE VETORES
let frutas = ['Laranja','Maçã','Banana']
document.write(`<p>Nossa lista de frutas é: ${frutas}</p>`)
frutas[3] = 'Morango'
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`)

document.write(`<h4>O método PUSH - Insere um novo elemento no Final do vetor.</h4>`)
frutas.push('Abacaxi')
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`)

document.write(`<h4>O método Unshift - Insere um novo elemento no Final do vetor.</h4>`)
frutas.unshift('Pera')
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`)

//COMO CONTAR OS ELEMENTOS DE UM VETOR -METODO LENGTH
const items = frutas.length

document.write(`<p>Na nossa lista temos ${items} frutas.</p>`)