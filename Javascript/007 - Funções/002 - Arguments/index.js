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

console.log(subtracao(1,2, "Abc"));