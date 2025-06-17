/*

Hoisting pode ser definido como um processo de "Elevação" ou "Içamento" do seu código, ele permite que você execute funções 
antes de seus valores serem declarados.

*/

console.log(soma(2, 5)) // chamada da função "soma" antes da declaração dos parâmetros
function soma(a, b) { // O Hoisting lê essa função e "eleva" ela para cima de sua chamada.
return a + b // retorna os parâmetros para função soma.
}

// Porém o hoisting não funciona para variáveis do tipo let e var

console.log(mensagem)
var mensagem = "capacitação";
//retorna undefined

/* A utilização de Hoisting em var não é indicada, pois a variável criada é elevada para o escopo, 
mas sem o seu valor, e com isso, retorna valor undefined.

Hoisting também não é indicado utilizando let, pois acontece um outro tipo de comportamento não desejado:

*/
console.log(mensagem)
let mensagem = "capacitação";

// Retorna script.js:1 Uncaught ReferenceError: Cannot access 'mensagem' before initialization

/*
Esta mensagem em português significa “Não é possível acessar ‘alura’ antes de sua inicialização'', 
ou seja, a linguagem JavaScript reconhece que ‘let = alura’ existe, porém não consegue acessar sua declaração.
Esse comportamento de Hoisting com let é o mesmo ao utilizar const.
*/