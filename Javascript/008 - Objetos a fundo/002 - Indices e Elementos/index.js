// Dado um objeto de 3 parâmetros, podemos retorna-los sem escrever os parâmetros dentro das propriedades:
// Desde que tenham o mesmo nome.
function Tenis(tamanho,estoque,preco){ 
    return {
        tamanho, // Geralmente passamos o parâmetro, ex: tamanho: tamanho. Vai depender da sua lógica
        estoque,
        preco,
    };
}
console.log(Tenis(37,true,"R$200,00"));

// Retorna: { tamanho: 37, estoque: true, preco: 'R$200,00' }

// Objeto com variáveis:

const tamanho = 35;
const estoque = true;
const preco = "R$200,00";

const Tenis2 = {
    tamanho,
    estoque,
    preco,
}

console.log(Tenis2);

// Retorna: { tamanho: 35, estoque: true, preco: 'R$200,00' }


// Método get
const Tenis3 = {
    getTamanho() {
        return 35;
    },
};

console.log(Tenis3.getTamanho());

// Retorna: 35