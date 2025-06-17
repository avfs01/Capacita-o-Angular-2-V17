// Sintaxe

/*
// Sintaxe geral
const elementos = document.getElementsByTagName('tagname');

// Selecionar todos os elementos
const todosElementos = document.getElementsByTagName('*');
*/

"use strict";

const p = document.getElementsByTagName("p");

console.log(p);

const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  links[i].style.color = 'blue';
  links[i].target = '_blank';
}