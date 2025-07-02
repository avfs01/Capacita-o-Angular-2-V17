/*
    Static define um método estático para a classe.
    Métodos estáticos não são chamados nas instâncias da classe.
    Em vez disso, eles são chamados na própria classe.
    Geralmente, são funções utilitárias, como funções para criar ou clonar objetos. 

    * São acessados diretamente pela classe, sem precisar criar um new
*/

/*
Sintaxe:

class ClasseExemplo {
  static propriedadeEstatica: tipo = valor;
  
  static metodoEstatico(): tipoRetorno {
    // Implementando
  }
}

// Acessando
ClasseExemplo.propriedadeEstatica;
ClasseExemplo.metodoEstatico();

*/

/*
Casos de uso comum:

* Configurações globais
* Classes utilitárias

*/

// Boas práticas:

// Usar para funcionalidades independentes
// Preferência quando não precisar de multiplas instâncias
// Evitar usar muito ( pode dificultar testes )

/*

class Circulo {
    static pi: number = 3.14159265359;

    static calcularArea(raio: number) {
        return this.pi * raio * raio;
    } 
}

console.log(Circulo.calcularArea(5));

*/

class Utils {
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)))
    }
}

const tenis1: {tamanho:number, estoque:boolean} = {
    tamanho: 38,
    estoque: true,
}

const tenis2: {tamanho:number, estoque:boolean} = {
    tamanho: 38,
    estoque: true,
}

console.log(Utils.cloneObject([tenis1,tenis2]));
