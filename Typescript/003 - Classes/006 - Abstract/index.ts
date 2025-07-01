/*
    Classes, métodos e campos no Typescript podem ser abstratos.

    Um método abstrato ou campo abstrato é aquele que não teve
    uma implementação fornecida.

    O papel das classes abstratas é servir como uma classe base para subclasses
    que implementam todos os membros abstratos.

*/



abstract class Pessoa {
    protected nome: string = " ";
    protected idade: number = 0;
    
    constructor(nome: string,idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    }
    public fezAniversario(){
        return `O ${this.nome} fez ${this.idade+1} anos`;
    }

    protected abstract  profissao: string;
    public abstract qualSuaProfissao(): string;
    public abstract salario(salario:number): string;
}

class Antonio extends Pessoa{
    protected profissao: string = "Desenvolvedor";
    protected valor: string | number = "R$***";
    constructor() {
        super("Antonio",23);
    }

    public qualSuaProfissao(): string {
        return `O ${this.nome} trabalha como ${this.profissao}`
    }
    public salario(): string {
        return `O ${this.nome} recebe ${this.valor}`;
    }
}

const antonio = new Antonio;

console.log(antonio.qualSuaProfissao());
console.log(antonio.salario());