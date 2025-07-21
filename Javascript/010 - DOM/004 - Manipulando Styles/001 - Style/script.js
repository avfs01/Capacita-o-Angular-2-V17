"use strict"

const h1 = document.querySelector("h1");

h1.style.fontFamily = "Arial";
h1.style.color = "blue";

const p = document.querySelectorAll("p");

p.forEach((i) =>{
    i.style.fontFamily = "Arial";
    i.style.fontSize = "16px";
});