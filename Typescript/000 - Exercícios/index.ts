var lang: Array<string> = [];
lang.push("Typescript");
console.log(...lang);

// Criando uma lista de usuários com tuplas e uso de loop.

let list: [nome: string,idade: number,email: string] = ["Antonio", 23,"meuemail@gmail.com"];

let lista: [nome: string, idade: number] = ['Bill Gates', 99];

console.log(...lista);

for(let i=0; i < 4; i++){

    lista.push(`Usuário n° ${i} ; ${23+i} anos`);
    console.log(...lista);
}
//console.log(lista.length);


// enumerando dias da semana através do enum

export enum DiasDaSemana{
    Segunda = 1,
    Sabado = 6,
    Quarta = 3,
    Quinta = 4,
    Terca = 2,
    Sexta = 5,
    Domingo = 7,
}

for(let i = 1; i <= 7; i++){
    console.log(`${DiasDaSemana[i]} é o ${i}° dia da semana`);
}

// explorando Union types

let exp : number | string | boolean = 13;
console.log(typeof(exp));

// Tipando funções

function calc(x:number, y: number): string {
    return `resultado: ${x+y}`;
}

console.log(calc(6,8));
console.log(typeof calc(1,1)) // string

