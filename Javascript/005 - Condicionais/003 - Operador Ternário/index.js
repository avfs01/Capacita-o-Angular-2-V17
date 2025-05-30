//O operador ternário checa uma condição ? true : false;

const velocidade = 75;
const warn = 85;

const condicao = velocidade >= warn 
? console.log("Multa aplicada") // O operador "?" verifica se é verdadeiro
: console.log("Continue andando"); // O ":" funciona como um "se for false"

if(velocidade >= warn){ // Estrutura padrão com if else.
    console.log("Multa aplicada");
}