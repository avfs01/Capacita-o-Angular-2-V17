/*
    shift = remove o primeiro elemento de um array e retorna esse elemento
    pop = remove o último elemento de um array e retorna este elemento
*/

let arr = [1,2,3,4,5]; //array de índices 0 a 4

console.table(arr);

arr.shift(); // remove o elemento do índice 0
console.log(arr.shift()); // mostra o valor que está sendo removido
console.table(arr);

arr.pop(); // Remove o elemento do último índice
console.log(arr.pop()); //mostra o valor que está sendo removido
console.table(arr);