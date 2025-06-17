"use strict";

// innerHTML => Retorna o texto COM formatações e COM elementos HTML

// createElement => Cria um elemento HTML

// Sintaxe 

// const elemento = document.createElement('tagName');

// retorna um novo elemento HTML (ainda não inserido no DOM)

const div = document.querySelector("div");
/*
console.log(1,div);
console.log(2,div);

div.innerHTML += "<strong>Texto alterado</strong>"; // operador += concatena com o texo
*/
/*
 Métodos importantes:

 append() e appendChild()
 adiciona o elemento criado ao DOM

// append() pode adicionar múltiplos nós e textos
elementoPai.append(novoElemento, "Texto", outroElemento);

// appendChild() adiciona apenas um nó
elementoPai.appendChild(novoElemento);

setAttribute()

Adiciona atributos personalizados
const div = document.createElement('div');
div.setAttribute('data-id', '123');

classList()

Manipulação de classes

const btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary');
btn.classList.remove('btn-primary');
btn.classList.toggle('ativo'); 

*/

// createElement()

// Mais rápido e performático

const elementUL = document.createElement("ul");
console.log(elementUL);

[1, 2, 3].forEach(  (element) =>{
    const elementLi = document.createElement("li");
    elementUL.appendChild(elementLi);
    elementLi.innerText = `Lista ${element}`;
});

div.appendChild(elementUL);