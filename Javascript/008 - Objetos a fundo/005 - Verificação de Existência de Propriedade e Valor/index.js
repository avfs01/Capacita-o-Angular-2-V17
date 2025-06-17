
const Tenis = {
    tamanho: 45,
    estoque: true,
    //marcas: [{nome:"Nike"},{nome:"Adidas"}],
    secret:12345,
    n:5,
    link: {a: "a é = a",b:{c:"C = c"}},
};

// hasOwnProperty

if (Tenis.hasOwnProperty( "tamanho")){ 
    console.log("Tamanho disponível");
} else {
    console.log("Não temos tanho");
}

