// Como vimos, através da const, não podemos alterar o valor da variável ou do objeto
// Usando let:

let Tenis = {
    tamanho: 45, // Iniciamos o valor do objeto como 45
    estoque: true,
};
/*
Tenis.tamanho = 42; //Alteramos o valor do objeto, referenciando com '.'
Tenis.estoque = false;

console.log(Tenis); // Retorna 42
*/

Tenis["preco"] = "R$42"; // Método alternativo para criar uma nova propriedade dentro do objeto.
console.log(Tenis);

console.log(Tenis["preco"]); // Retorna "R$42"