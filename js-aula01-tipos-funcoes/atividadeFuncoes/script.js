// Exercicios DE FUNÇÕES

// FUNÇÃO SIMPLES

function mostrarDados() {
  document.write("<h2>Dados do usuário:</h2>");
  document.write("<p>Nome: Thais</p>");
  document.write("<p>Idade: 20</p>");
  document.write("<p>Cidade: Campinas</p>");
}
// Invocando a função
mostrarDados();

// FUNÇÃO COM PARÂMETROS
const numero1 = 10;
const numero2 = 2;

function dividirNumeros(num1, num2) {
  let resultado = num1 / num2;
  document.write(`<p>O resultado da divisão foi: ${resultado}</p>`);
}
// Enviando argumentos
dividirNumeros(numero1, numero2);

// FUNÇÃO COM RETORNO
const n1 = 2;
const n2 = 3;
const n3 = 4;
function multiplicarTres(num1, num2, num3) {
  return num1 * num2 * num3;
}
document.write(
  `<p>O resultado da multiplicação é: ${multiplicarTres(n1, n2, n3)}</p>`,
);

// FUNÇÃO COM RETORNO CONDICIONAL
const idade = 20;

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

document.write(`<p>Situação: ${verificarIdade(idade)}</p>`);

// FUNÇÃO ANÔNIMA
const nota1 = 6;
const nota2 = 8;

const verificarMedia = function (nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  if (media <= 5) {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
};

document.write(`<p>Resultado da média: ${verificarMedia(nota1, nota2)}</p>`);

// ARROW FUNCTION (1 PARÂMETRO)
const numero = 5;

const triplo = (numero) => {
  return numero * 3;
};

document.write(`<p>O triplo do número é: ${triplo(numero)}</p>`);

// ARROW FUNCTION (MAIS PARÂMETROS)

const a = 1;
const b = 2;
const c = 3;
const d = 4;

const somaQuatro = (n1, n2, n3, n4) => {
  return n1 + n2 + n3 + n4;
};

document.write(`<p>A soma dos números é: ${somaQuatro(a, b, c, d)}</p>`);
