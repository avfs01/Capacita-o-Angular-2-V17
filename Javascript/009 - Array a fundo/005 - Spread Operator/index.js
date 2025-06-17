// Com o spread operator podemos retornar todos os elementos do array sem a formatação de [,]

var arr = [1, 2, 3, 4, 5];

console.log(...arr);

console.log(`O maior  valor do array é: ${Math.max(...arr)}`);