"use strict"

const h1 = document.querySelector("h1");
h1.classList.add('active');
h1.classList.add('Teste 1');

console.log(h1);

if(h1.classList.contains("active")){
    alert("Existe a classe");
}

h1.classList.remove("Teste 1");
h1.classList.toggle("Teste 1");