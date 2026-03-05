//CLASSES NO JAVASCRIPT
// Nome de classes devem iniciar com a primeira letra maiúscula
class Carro {
  //DEFININDO OS aTRIBUTOS
  constructor(marca, modelo, ano) {
    //this é uma referencia as instancias que serão criadas atraves dessa classe.
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //DEFINIR OS METODOS
  buzinar() {
    return "Beep,Beep!";
  }
//metodo
turbo (){
    return "Vrummm,Vrummm!";
}

}

//INSTÂNCIANDO OBJETOS
const carroPopular = new Carro("Fiat", "Uno", "2012");

document.write(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano 
    ${carroPopular.ano} e que buzina faz ${carroPopular.buzinar()}</p>`);

const carroEsportivo = new Carro("Chevrolet","Camaro","2020");


document.write(`<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano
     ${carroEsportivo.ano} a buzina faz ${carroEsportivo.buzinar()} E que o turbo faz ${carroEsportivo.turbo()}</p>`)
