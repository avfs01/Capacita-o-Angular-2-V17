

const Tenis = {
    tamanho: 45,
    estoque: true,
    //marcas: [{nome:"Nike"},{nome:"Adidas"}],
    secret:12345,
    n:5,
    link: {a: "a é = a",b:{c:"C = c"}},
};

const {tamanho,estoque,marcas = "Não possui Marca alguma!"} = Tenis; // Caso "marcas" não exista, o operador "=" trabalha como um else.
 
console.log(tamanho, estoque, marcas);

const {secret: randomNumber, n: avaliacoes} = Tenis; // O destruturing permite passar "apelidos" para o objeto, chamando no console.log() seu apelido direto.
// melhorando a segurança do seu código

const {link: {a,b:{c}},} = Tenis;
console.log(randomNumber);
console.log(avaliacoes);
console.log(a,c);

const totais = [ 10, 20, 30 ]

  const [ valorA, valorB, valorC ] = totais

  console.log(valorA) // 10
  console.log(valorB) // 20
  console.log(valorC) // 30