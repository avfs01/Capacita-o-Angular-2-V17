"use strict";
/*
`any`  pode ser usada para desabilitar a verificação do tipo do dado na variável. Ele declara ao Typescript para confiar no seu código.
a partir daí, a variável pode assumir qualquer valor a qualquer momento.
*/
let valor;
console.log(typeof valor); // retorna undefined
valor = [{ nome: "Antonio" }];
console.log(typeof valor); // retorna string
valor = "123";
console.log(typeof valor); // retorna string
valor = 123;
console.log(typeof valor); // retorna numb
