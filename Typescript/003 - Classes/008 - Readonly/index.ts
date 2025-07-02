/*
    readonly define propriedades que podem ser lidas mas não modificadas durante o código.

    É útil para criar:

    * Propriedades imutáveis

    * Valores constantes em classes/interfaces

    * Dados que não devem ser alterados após a construção
*/

// Exemplo:

class Pessoa {
    public readonly nome: string;
    public readonly matricula: number;

    constructor(){
        this.nome = "Antonio";
        this.matricula = 12354329;
    }
}

const novaMatricula = new Pessoa();

// novaMatricula.matricula = 999999;  retorna "Cannot assign to 'matricula' because it is a read-only property".


// Atenção, const e readonly apesar de terem propriedades básicas semelhantes, tem usos distintos.
 // Const:
// * Não se pode usar const dentro de uma class, seu escopo são as variáveis.
// * Deve ser atribuida na declaração.
// Bloqueia reatribuição.

// readonly:

// * Só pode ser declarada no constructor ou na declaração.
// * Usada em interface, class e type.


// Exemplo prático:

// configurações imutáveis:

class AppConfig {
  readonly API_URL = "https://api.exemplo.com";
}

const config = new AppConfig();
console.log(config.API_URL); 
// config.API_URL = "outro.url";  retorna erro.

// Boas práticas:

// * Use para propriedades que não devem mudar após construção.

// * Combine com interface para definir contratos imutáveis.