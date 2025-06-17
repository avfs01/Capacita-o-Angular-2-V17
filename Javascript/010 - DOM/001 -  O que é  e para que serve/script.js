// São métodos versáteis para selecionar elementos HTML em JS.

// Sintaxe

/*
const elemento = document.querySelector('seletorCSS');
*/

"use strict";

const h1 = document.querySelector("h1");

console.log(h1.style.background = "red");

// Seleciona pelo ID
const header = document.querySelector('#header');

// Seleciona pela classe (apenas o primeiro)
const btn = document.querySelector('.btn-primary');

// Seleciona por atributo
const input = document.querySelector('input[type="email"]');

// Seleciona dentro de um elemento
const liAtivo = document.querySelector('ul.lista li.ativo');