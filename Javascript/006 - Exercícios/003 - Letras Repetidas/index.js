// Contador de Letras repetidas.
// Exercício prático durante a capacitação.


 
const palavra  = "Abacate".toLowerCase().replaceAll(" " ,""); //funções aprendidas: .toLowerCase() transforma a entrada em letras minúsculas; .replace() e .replaceAll() substitui substrings em novos valores, podendo ser apenas uma ou todas, respectivamente
let letras = {}; //Definimos um objeto

for( let i = 0; i < palavra.length; i++){ // for loop para verificar todas as letras de 0 a n-1; usando a função .length para medir o tamanho da string.
    if (letras[palavra[i]]) {
        letras[palavra[i]]++; 
    } else {
        letras[palavra[i]] = 1;
    }   
}
console.log(letras);