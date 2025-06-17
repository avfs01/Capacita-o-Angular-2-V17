
// Método que retorna uma HTMLCollection de elementos com a classe especificada

/*
Características principais:
Retorna elementos em ordem de aparecimento no DOM

Case-sensitive ('menu' ≠ 'Menu')

Coleção "viva" (atualiza automaticamente quando o DOM muda)

Mais rápido que querySelectorAll para seleção simples por classe
*/

"use strict";

const botoes = document.getElementsByClassName('btn');

for (let i = 0; i < botoes.length; i++) {
  botoes[i].style.backgroundColor = 'blue';
}