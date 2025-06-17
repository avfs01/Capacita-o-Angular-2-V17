/*
const stringArray = ["A","C","D","W","L","B"];

console.log(stringArray.sort());

console.log(stringArray.reverse());
*/

//const numberArray = [10,20,30,40,50,1000,1,55,15];

//console.log(numberArray.sort( (a,b) => a - b).reverse());

let obj = [
    {
        nome:"Nome A",
    },
    {
        nome: "Nome Z",
    },
    {
        nome: "Nome B",
    },
    {
        nome: "Nome F",
    },
    {
        nome: "Nome H",
    },
    {
        nome: "Nome D",
    },
];

console.log(obj.sort((a,b) => a.nome.localeCompare(b.nome)));
