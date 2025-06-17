"use strict";

const p2 = document.querySelectorAll("#paragrafo");
const p = document.querySelectorAll(".paragrafo");
p2.forEach(element => {
    element.style.background = "pink";
    element.style.padding = "20px";
    element.style.borderRadius = "50px";
});
p.forEach(element => {
    element.style.background = "pink";
    element.style.padding = "20px";
    element.style.borderRadius = "50px";
});

console.log(...p);
console.log(...p2);