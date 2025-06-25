"use strict";
let pedido = "Pizza";
pedido = "Pastel";
let numero = 123;
numero = 321;
let deuBom = false;
deuBom = true;
let aa = 12345;
const fun = (value) => {
    return value.toString(); // Converte number para string
};
const resultado = fun(aa);
console.log(resultado); // "12345" (string)
console.log(typeof resultado); // "string"
