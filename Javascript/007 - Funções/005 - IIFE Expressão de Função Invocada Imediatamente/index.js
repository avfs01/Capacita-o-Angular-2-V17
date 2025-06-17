// IIFE = Immediately Invoked Functioin Expression
// Expressão de Função invocada imediatamente

/*
Sintaxe básica:

(function (){
 // Código...
})();

*/

/*
    Primeiro, declaramos a chamada da função sem precisar nomea-lá, 
    perceba que envolvemos a função entre parênteses () para que ela seja tratada como uma expressão
*/

(function (){
    var teste = "Teste";
    console.log(teste);
})(); // Sem os () a função não é invocada imediatamente.