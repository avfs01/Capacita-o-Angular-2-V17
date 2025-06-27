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

class Poligono{
    nome: string;
    altura: number;
    largura: number;

    constructor(nome:string,altura:number,largura:number){
        this.nome = "Poligono";
        this.altura = altura;
        this.largura = largura;
    }
    dizerNome() {
    console.log(" Olá, eu sou um",this.nome+ ".")
    }
}
// ### super() 
/*
O super() é usado em classes filhas para:

Chamar o construtor da classe pai (obrigatório em classes derivadas com construtor).
Acessar métodos e propriedades da superclasse.

*/

// Sintaxe:

/*
    No Construtor

    class Animal {
  constructor(public nome: string) {}
}

class Cachorro extends Animal {
  constructor(nome: string, public raca: string) {
    super(nome); // Chama o construtor de Animal
  }
}

const rex = new Cachorro("Rex", "Labrador");


    Para Acessar Métodos da Superclasse

class Felino {
  emitirSom(): string {
    return "Som genérico";
  }
}

class Leao extends Felino {
  emitirSom(): string {
    return "Roar! " + super.emitirSom(); // Chama método da superclasse
  }
}
*/

class Quadrado extends Poligono{
    
    constructor(public nome:string,public altura:number,public largura:number){
        super(nome,altura,largura);
    }
}

const Solido = new Quadrado("Quadrado",12 , 12);

console.log(...Object.values(Solido));