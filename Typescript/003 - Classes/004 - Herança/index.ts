/*
    Herança permite que uma classe filha herde propriedades e métodos de outra classe pai, promovendo reuso de código e organização em hierarquia.
*/

class Pessoa {
    nome:string;
    idade:number;

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Maria extends  Pessoa{} // extends
class Joao extends Pessoa{}

const maria = new Maria("Maria",36);
const joao = new Joao("Joao",52);

console.log(...Object.values(maria));
console.log(...Object.values(joao));