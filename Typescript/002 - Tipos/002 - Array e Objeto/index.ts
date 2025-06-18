// Arrays são estruturas de dados que armazenam coleções ordenadas de elementos do mesmo tipo (ou tipos diferentes, se permitido)

/*
SINTAXE:

// Forma mais comum (recomendada)  
let array1: tipo[] = [valor1, valor2, ...];  

// Forma genérica (alternativa)  
let array2: Array<tipo> = [valor1, valor2, ...]; 
*/

// Objetos em TypeScript, objetos podem ser tipados para garantir segurança e autocompletar.

// Sintaxe: 

/*
// Forma implícita (inferência de tipo)  
let pessoa = {  
  nome: "João",  
  idade: 30  
};  

// Forma explícita (com tipo definido)  
let pessoa: { nome: string, idade: number } = {  
  nome: "Maria",  
  idade: 25  
};  

// Objeto vazio com tipo  
let carro: { marca: string, ano: number } = {  
  marca: "Toyota",  
  ano: 2020  
};  
*/
/*

let array1: [object] = [
    {
    nome:"Denner Troquatte",
    Tipo: "Teste",
    Valor: 123,
    condicao: true,
    }
];
let array2: Array<string | number | boolean | object> = ["Denner","Troquatte",{nome:"Den"},]; // operador | (or) aceita tais condições no array


//console.log(array1)
//console.log(array2);

let obj1: {nome: string, sobrenome:string,idade:number,deuBom:boolean} = {
    nome:"Dener",
    sobrenome:"Troquatte",
    idade:123,
    deuBom: true,
};

let obj2: Array<{
    nome: string;
    sobrenome: string;
    idade: number;
    deuBom: boolean;
}> = [
    {
    nome:"Dener",
    sobrenome:"Troquatte",
    idade:123,
    deuBom: true,
}];

console.log(...obj2);

// Usando Interface
*/
interface Produto {
    id: number,
    nome: string,
    preco: number, 
}

let notebook: Produto = {
    id: 1,
    nome: "Dell Alienware",
    preco: 9000
};
Object.values(notebook).forEach((valor) => {
    console.log(valor);
});