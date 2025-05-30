//função é um conjunto de instruções que executa uma tarefa ou calcula um valor

/*

Estrutura de uma função
 Nome;
 Lista de argumentos para função em parênteses e separados por vírgulas;
 Declarações JS que definem a função dentro das { };

*/

// 1 - Declaração de função

function isValid(){ // Duas Funções não podem ter o mesmo nome
    const soma = 1 + 2;

    if( soma === 3){
        return true;
    }
    return false;
}
console.log(isValid());

// 2 - Expressões 

const isValidExpression = function() {
    const soma = 1 + 2;

    if( soma === 3){
        return true;
    }
    return false;
}


// 3 - Arrow function

const isValidArrow = () => 2 * 2;
console.log(isValidArrow());