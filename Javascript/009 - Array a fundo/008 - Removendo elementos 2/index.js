const mes = ["Janeiro","Fevereiro","Abril"];

console.log(mes);

mes.splice(2,0,"Março");  // remove 0 elementos a partir do índice 2 e insere "Março" no índice 2, "Abril" agora é índice 4

console.log(mes);
/*
let arr = [
    {nome: "Dener",tel: "(99)999 999"},
    {nome: "Mozao",tel: "(99)999 999"},
    {nome: "Amigo 1",tel: "(99)999 999"},
    {nome: "Amigo 2",tel: "(99)999 999"},
    {nome: "Amigo 3",tel: "(99)999 999"},
];

console.table(arr);

console.log(arr.splice(4, 1));

console.table(arr);
*/