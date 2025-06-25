"use strict";
const fn = (nome, idade) => {
    if (!idade) {
        return `nome: ${nome}, idade: sem valor definido`;
    }
    return `nome: ${nome}, idade: ${idade}`;
};
console.log(fn("Antonio", 23));
const pessoa = { nome };
console.log((fn("Antonio", 23)));
