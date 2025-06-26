class Pessoa {
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    }
    fezAniversario(){
        return `O ${this.nome} fez ${this.idade+1} anos`;
    }
}

const pessoa1 = new Pessoa("Vini",23);
console.log(pessoa1.comer("Bolo"));
console.log(pessoa1.fezAniversario());