/*
O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.
Sintaxe: arguments

O objeto arguments é uma variável local disponível dentro de todas as funções. 
Você pode referenciar os argumentos de uma função dentro da função usando o objeto arguments. 
Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0.
*/

function soma (num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1+num2;
    }
    return "Voce passou dados diferentes!";
}
console.log(soma(1,5)); // executa as operações retornadas da função. //cuidado com as operações de soma em relação a concatenação.
// Ex: console.log(soma("1",5)); retorna 15

console.log(soma(soma(1,4),soma(1,4))); // podemos chamar funções dentro de funções. cuidado com o desempenho, a complexidade pode ser de O(n * f(n))

function subtracao(){
    return arguments; // O retorno arguments retorna os argumentos ou os parâmetros passados dentro da função.
}




/* O objeto argumentos não é um Array. É similar a um Array, mas não possui as propriedades de Array, exceto length. 
Por exemplo, ele não possui o método pop. Entretanto, ele pode ser convertido em um Array real
*/
