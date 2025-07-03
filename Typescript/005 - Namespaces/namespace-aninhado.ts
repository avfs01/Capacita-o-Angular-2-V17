/*
Os namespaces são uma forma específica do Typescript para organizar código.
Namespaces são simplesmente objetos Javascript nomeados no namespace global.
Isso torna os namespaces uma construção muito simples de usar.
*/


export namespace Pessoa {
    export namespace Maria {
        const data = 1+1;

        export let nome = "Antonio";
        export const calc = () => {
            return data;
        };
    }
        export namespace Joao {
        const data = 1+1;

        export let nome = "Joao";
        export const calc = () => {
            return data;
        };
    }
}
 
console.log(Pessoa.Maria.nome);
console.log(Pessoa.Joao.nome);