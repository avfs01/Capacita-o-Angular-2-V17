/*
let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { 
    link: {a: "a", 
           b: {c: "c"} }
};

let clone1 = Tenis; // De maneira simples, poderiamos apenas definir clone1 = Tenis

console.log(clone1);

*/
const origem = { b: 'abba', c: 'cc' };
const target = { a: 1, b: 2 };
const copia = [ "block","retorno"];

const returnedTarget = Object.assign(target,origem,copia[1]); // para mesclar objetos usamos Object.assign

console.log(target);

console.log(returnedTarget === target);
// output: true

let 

// Operador Spread

// Sintaxe:

//[{(...argumentos)}]

// Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.

// Chamadas de função:

// Considere dois valores que precisam ser somados por uma função simples: utilizando o operador spread podemos fazer esta tarefa sem que seja necessário atribuir os valores deste Array a uma variável. No exemplo abaixo podemos ver melhor como este processo pode ser feito:

const soma = (a,b) => a+b
    const valores = [ 10,50]
    console.log(soma(...valores))

/*
 O operador spread '...' permite concatenar dois objetos sem a necessidade do médoto concat:
*/

const pessoas = ['Pedro','Maria','João']
    const todasAsPessoas = [...pessoas,'Marcus','Tiago']
    console.log(pessoas);
    console.log(todasAsPessoas);