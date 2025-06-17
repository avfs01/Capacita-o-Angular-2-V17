/*
1 - Declarar a função
2 - Nome da função
3 - Parâmetros
4 - Argumentos
5 - Retorno
*/

function nomeDaFuncao(){
    return arguments;
}
console.log(nomeDaFuncao());

// -------------

// Para funções arrow:

const nomeFuncArrow = () => "Capacitação";  // Função Arrow com retorno na mesma linha

console.log(nomeFuncArrow()); 

// A função de hoisting não funciona em arrow functions


// Função  com retorno declarado
 
console.log(nomeFuncArrowBlock()); // Hoisting não funciona na função

const nomeFuncArrowBlock = () => {
    console.log(nomeFuncArrowBlock()); // Hoisting não funciona na função

    return "Capacitação"; // Retorna : ReferenceError: Cannot access 'nomeFuncArrowBlock' before initialization
    
};

// ### Arguments

/*
O retorno arguments não funciona na função arrow

*/

// Porém em Functions, sim.

function argumentsFunc() {
    return arguments;
}

console.log(argumentsFunc());

// Na arrow function, é possível chamar os parâmetro sem o uso de parênteses()

const funcParametros = (param) => param; // Porém só funciona com 1 parâmetro Uso de () apenas para melhor legibilidade

// 5 - Arrow function não pode ser invocado com "new"

function novaFunc(){
    return 123; 
}
new novaFunc();