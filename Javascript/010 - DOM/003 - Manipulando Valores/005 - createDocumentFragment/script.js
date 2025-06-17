"use strict";

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();
console.log(fragment);

const lanches = ["Lanche 1","Lanche 2", "Lanche 3","Lanche 4"];

lanches.forEach( (i) =>  {
    const li = document.createElement("li");
    li .textContent = i;
    ul.append(li);
});