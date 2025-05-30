/*

==, ===, !=, !==, >, <, >=, <=

*/
// == compara os valores
console.log(1 == 1); //retorna um boolean se for true ou false
console.log(1 == "1"); // retorna true mesmo sendo tipos diferentes

//  === compara os valores estritamente

console.log(1 === "1"); // retorna se são DEFINITIVAMENTE iguais e retorna falso, busca desde o tipo até o valor
console.log(1 === 1); // retorna True

// != compara se um valor é diferente do outro.

console.log(1 !="1"); //false pela mesma lógica do == e ===
console.log(1 != 2); // true

// !== compara se são estritamente diferentes, mesma lógica de == e ===

console.log(1 !== "1"); // True
console.log(1 !== 1); // False


// > compara se um valor é MAIOR que o outro

console.log(1 > 2); // retorna false 

// < compara se um valor é MENOR que o otro

console.log(2 < 3); // true

// >= compara se é MAIOR OU IGUAL

console.log(3 >= 3); // true
console.log(2 >= 3); // false

// <= mesma idéia do >=

console.log(2 <= 3); // true
