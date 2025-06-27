// ### Getters e Setters

// São métodos de acessar e modificar propriedades

// get Acessa propriedades de forma controlada

// set Modifica propriedades com validação

// Podem encapsular acesso a campos privados

// Exemplo:

class Exemplo {
  private _valor: number = 0;

  get valor(): number {
    return this._valor;
  }

  set valor(novoValor: number) {
    if (novoValor >= 0) {
      this._valor = novoValor;
    } else {
      console.error("Valor não pode ser negativo");
    }
  }
}
// Podem ser usados para proteger seus dados, especialmente na criação de classes

// Para cada instância de variável, um método getter retorna seu valor,
// enquanto o setter define ou atualiza.

class Pessoa {
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Dener extends Pessoa {
    private _profissao: string = "Programador";

    constructor() {
        super( "Tn",23);
    }
    get profissao() {
        return this._profissao;
    }
    set profissao(valor: string) {
        this._profissao = valor;
    }
}

const denner = new Dener();
console.log(denner.profissao);