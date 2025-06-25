"use strict";
// Arrays são estruturas de dados que armazenam coleções ordenadas de elementos do mesmo tipo (ou tipos diferentes, se permitido)
let notebook = {
    id: 1,
    nome: "Dell Alienware",
    preco: 9000
};
Object.values(notebook).forEach((valor) => {
    console.log(valor);
});
