"use strict";

const h1 = document.querySelector("h1");
const classP = document.querySelector(".paragrafo strong");
const idP = document.querySelector("#paragrafo")

console.log(h1);
console.log(document.querySelector(".paragrafo").querySelector("strong"));
console.log(idP);

let timer =0;
const title = document.querySelector("title");

setInterval( () =>{
    title.innerText = timer;
    timer++;
}, 1000);