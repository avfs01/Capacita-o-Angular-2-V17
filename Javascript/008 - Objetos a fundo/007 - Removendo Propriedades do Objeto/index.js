// Através do delete podemos deletar uma propriedade do objeto

let Tenis = {
    tamanho: 43,
    estoque: true,
};

delete Tenis.estoque // referenciamos com o '.'

console.log(Tenis); // Retorna apenas { tamanho: 43 }

Tenis.estoque = true; //  restaura nossa propriedade 'estoque'

console.log(Tenis); // { tamanho: 43, estoque: true }