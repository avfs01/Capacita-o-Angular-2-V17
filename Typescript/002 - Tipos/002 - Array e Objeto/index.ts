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