// São usadas para armazenar diverso valores e podem ser alteradas durante o programa
// podem ser declaradas através de:

/* var  É utilizado globalmente, não costuma ser usado pois pode gerar bugs
let  Gerado dentro de um escopo
const  Também gerado dentro de um escopo, porém só podemos armazenar dados apenas uma vez. */

// variáveis em JS são case sensitive

// Não é permitido usar palavras reservadas para declaração de variáveis. ( break, return, let...etc)
// Por boas práticas, é importante dar o nome da variável com algo que possa ser lido e lembrado de forma mais fácil( evitar usar "a", "var1","x"...)

var cachorro = "Kyara";
console.log(cachorro);

let lanche = "Carne";
console.log(lanche);

const nome = "Dener"; // a const nome não pode ser alterada durante a execução do código
console.log(nome);