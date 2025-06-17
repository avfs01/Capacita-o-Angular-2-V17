/*
    Uma clousure ocorre quando uma função é declarada dentro do corpo de outra, 
    e os argumentos da função interna referenciam valores da externa.
*/
/*
function QualSeuNome(name){
    const msg = `O seu nome é: ${name}`;
    function YourName(){
        return `${msg} ${name}`;
    }
    return YourName();
}

console.log(QualSeuNome("Z").YourName());
*/
/*  retorna 
    console.log(QualSeuNome("Z").YourName());
                             ^

    TypeError: QualSeuNome(...).YourName is not a function

*/

function Calculadora (numero1,numero2){
    const msg = "Resultado:";
    const Soma = () => {
        return ` ${msg} ${numero1 + numero2}`;
    }
    const Subtracao = () => {
        return ` ${msg} ${numero1 - numero2}`;
    }
    const Multiplicacao = () => {
        return ` ${msg} ${numero1 * numero2}`;
    }
    const Divisao = () => {
        return ` ${msg} ${numero1 / numero2}`;
    }
    return {
        soma:Soma(),
        subtracao: Subtracao(),
        multiplicacao: Multiplicacao(),
        divisao: Divisao(),
    };
}
console.log(Calculadora(5,2));

// Materiais auxiliares: https://medium.com/@stephanowallace/javascript-mas-afinal-o-que-s%C3%A3o-closures-4d67863ca9fc
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures