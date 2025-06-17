"use strict";

// O textContent e innerText são propriedades para manipulação de texto com DOM

// textContent
/*

* Retorna: Todo o texto, incluindo espaços e elementos ocultos
* Mais Rápido
* Mantém quebras e espaços HTML

*/

// innerText

/*

* Retorna: Apenas texto visivel
* Mais lento
* Considera css e layout visual

*/


// Sintaxe

/*

element.textContent
element.innetText

Definir novo elemento:

elemento.textContent = "Novo elemento"
elemento.innerText = "Novo elemento"
*/

const p = document.querySelector("p");

console.log(p.textContent);

p.textContent = "Antonio Vitor" // texto com formatação e SEM html

p.innerText = "Nome novo" // texto SEM formatação e SEM HTML

p.innerHTML = "<strong> Novo nome </strong>" // texto COM HTML e COM formatações