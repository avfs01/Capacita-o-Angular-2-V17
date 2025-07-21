/*
    Em typescript, interfaces definem os contratos em seu código.
    * A forma que seu objeto deve ter
    * As propriedades e métodos que devem existir
    * Os tipos associados a cada membro

    Eles também fornecem nomes explícitos para verificação de tipo.
*/

// Sintaxe básica:

interface INomeDaInterface { // Por convenção, é declarado o nome da interface com um I na frente.

    // nomeDaPropriedade: tipo;
}

interface IPessoa {
    nome: string;
    idade: number;
    readonly matricula: number;
    enabled(): boolean;
}

// Seria equivalente a:

const pessoa: { nome: string, idade: number} = {nome: "Antonio", idade: 23};

// Pode-se usar tabém:

const pessoa2: IPessoa = { 
    nome: "Antonio", 
    idade: 23, 
    matricula: 23101991, 
    enabled:() => {
        return true;
    },
    endereco: "Avenida 123, AP 000",
};

console.log(...Object.values(pessoa2));

// Podemos adicionar novas propriedades a interfaces:

interface IPessoa {
    endereco: string;
}

// Exemplo prático:

// Tipagem de Obejos:

interface Produto {
  id: number;
  nome: string;
  preco: number;
  emEstoque?: boolean; // Propriedade opcional
}

const notebook: Produto = {
  id: 1,
  nome: "Notebook Dell",
  preco: 4500
};

// implements

// * garante que uma classe atenda a um contrato de interface.
// * Força a implementação de todos os membros obrigatórios.
// * Documenta quais contratos a classe segue.

// Sintaaxe básica:

interface Contrato {
  metodoObrigatorio(): void;
  propriedadeObrigatoria: string;
}

class MinhaClasse implements Contrato {
  propriedadeObrigatoria: string = "valor";

  metodoObrigatorio(): void {
    console.log("Implementação do método");
  }
}

// Exemplo:

class Antonio implements IPessoa {
    nome: string = "Antonio";
    idade: number = 23;
    endereco: string = "Rua ABC, AP 111";
    readonly matricula: number = 12389324;
    enabled(): boolean {
        return true;
    }
}






