/*
    Uma classe Typescript é uma estrutura de programação orientada a objetos que possui
    um conjunto de propriedades e métodos.

    A classe é um modelo para criar objetos, permitindo que você defina 
    uma estrutura com propriedades e comportamentos.
*/

// Sintaxe básica:

/*
class NomeDaClasse{
    propriedade1: tipo;  
    propriedade2: tipo = valorPadrão;


    // Construtor  
    constructor(parametro1: tipo, parametro2: tipo) {  
    this.propriedade1 = parametro1;  
    this.propriedade2 = parametro2;  
  }
}
*/

/*
 Ao definir uma class, deve-se inicializar as variáveis dentro dela:

 class Gate {
    nome: string; // A propriedade "nome" não foi inicializada e não está definida dentro do construtor.
 }

*/

// A configuração no JSON strictPropertyInitialization controla se a classe precisa ser inicializada no construtor.

// * readonly

// O readonly impede que o campo seja modificado fora do construtor.

// Sintaxe:

/*

class Block {
    readonly nome: string = "Versão 2.0 - 2025";
}

*/

// Construtores são semelhantes a funções. Voce pode adicionar parâmetros com tipos.

/*

class Point {
  x: number = 0;
  y: number = 0;
 
  // Constructor overloads
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    // Code logic here
  }
}

*/

class Pessoa{
    nome: string; // Também podemos setar o valor:   nome: string = "Antonio";
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}
const pessoa1 = new Pessoa("Antonio",23);


Object.entries(pessoa1).forEach((i) => {

        console.log(...i);
});

