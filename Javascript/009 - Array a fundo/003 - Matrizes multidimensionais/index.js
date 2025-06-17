// Matrizes são básicamente arrays multidimensionais M*N

/*

Um array é uma estrutura de dados unidimensional, já a matriz é multidimensional

*/

/*
    Sintaxe:
*/

let minhaMatrizMulti = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.table(minhaMatrizMulti);

// Acessar valores nas multidimensões do array | [linha][coluna]

console.log(minhaMatrizMulti[1][2]);

// Podemos criar matrizes dentro de outra matriz:

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
];

// Para acessar um índice usamos a mesma lógica
console.table(arr);
console.log(arr[3][1][1]);