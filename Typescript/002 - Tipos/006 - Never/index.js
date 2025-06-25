"use strict";
// never representa o tipo de valor que nunca deve ocorrer, ele é utilizado para garantir que algo nunca irá ocorrer.
/*
Sintaxe:

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function loopInfinito(): never {
  while (true) {}
}

let valorInacessivel: never;
*/
function verificandoTipo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("Este médoto não aceita esse tipo");
}
function fail(message) { throw new Error(message); }
verificandoTipo("teste String"); //Ok
verificandoTipo(10); //Ok
let ativo = true;
//verificandoTipo(ativo); // retorna uma exception
// Características
/*
* Nunca Retorna: Indica que a execução é interrompida (erro ou loop infinito).
* Subtipo de Todos os Tipos: Pode ser atribuído a qualquer tipo, mas nenhum tipo pode ser atribuído a never (exceto ele mesmo).
* Uso em Verificação Exaustiva: Garante que todos os casos de um tipo união (|) sejam tratados.
*/
