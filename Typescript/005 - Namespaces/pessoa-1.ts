/*
    Conforme construímos o código, temos uma estrutura de organização que precisamos manter para
    não causar colisões de nomes com outros objetos.

    Ao invés de criar vários nomes de variáveis, podemos declara-las dentro do escopo com namespace.

*/
export namespace Pessoa1 {
    export let nome = "Teste de export/import";
    export const data = "1+1";
    export const calc = () => {
        return data;
    }
}
// Para acessar as variáveis dentro de namespace, podemos usar o export.
console.log(Pessoa1.calc());

let nome = "Teste para declaração de variável com mesmo nome"; // Nomeando outra variável fora do namespace.

console.log(Pessoa1.nome);
console.log(nome);

// Boas práticas:

/* 
    * Prefira módulos ES6 para novos projetos
    * Use para migração de código legado
    * Manter namespaces pequenos e diretos
*/


export interface IPessoax {
    nome: string;
}

export const x: IPessoax = {
    nome: "Antonio",
}