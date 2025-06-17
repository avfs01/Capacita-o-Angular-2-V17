let Carro = {
    marca: 'Fiat',
    modelo: 'Toro',
    cor:  'Vermelho',
    ano: 2024,
    preco: 'R$200.000',
    estoque: true,
}

let Carro2 = {
    marca: 'Chevrolet',
    ano:2022,
    cor: 'Preto',
    estoque:false,
}

//console.log(Carro);

let clone = {...Carro,...Carro2};
//console.log(clone);

//let mesclar = Object.assign(Carro,Carro2);
//console.log(mesclar);


const obj = {
  protocol: 'https',
  host: 'consolelog.com.br',
  path: '/'
};

const clone4 = {
  ...obj
};

console.log(clone4);