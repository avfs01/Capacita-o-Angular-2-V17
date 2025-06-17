/*

Quando utilizamos o ... (spread operator) ou o Object.assign(), estamos efetuando uma shallow copy(copia rasa) de um objeto. 
Isso significa que estamos criando um novo objeto com uma nova referência.

as propriedades do tipo primitivo (primitive type), como por exemplo string e number, 
são copiadas gerando um novo valor, ocupando um novo espaço de memória, ou seja, são cópias independentes.

As propriedades do tipo referência (reference type), como arrays e objetos, tem suas referências copiadas, ou seja, não é feita uma cópia do objeto em si, mas sim do endereço de memória onde o objeto está armazenado. 
Portanto, as propriedades reference type do clone apontarão para o mesmo endereço das propriedades do objeto original.
*/


const obj = {
    nome: 'consolelog.',
    tags: [1, 2, 3],
    objs: {
        item1: 'valor1',
        item2: 'valor2'
    }
};

// Utilizando o spread operator (...)
// para clonar o objeto
const clone = {...obj};

// ou poderíamos utilizar o Object.assign:
// const clone = Object.assign({}, obj);

console.log(
    typeof obj,      // object (reference type)
    typeof obj.nome, // string (primitive type)
    typeof obj.tags, // object (reference type)
    typeof obj.objs, // object (reference type)
);

console.log(
    obj === clone,           // false
    obj.nome === clone.nome, // true
    obj.tags === clone.tags, // true
    obj.objs === clone.objs, // true
);




// Método JSON.stringify

// Converte qualquer tipo de dado em uma string
/*
let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = {link: {a:"a", b: { c: "c"} } };

let clone1 = JSON.stringify(Tenis);
clone1 = JSON.parse(clone1);
console.log(1,clone1);


console.log(1,clone1);
console.log(2,Tenis);

*/

// Deep copy

/*
Ao contrário da shallow copy, uma deep copy cria uma nova instância do objeto original e também cria novas instâncias de todos os objetos referenciados. 
Isso significa que todas as propriedades e membros do objeto original são copiados, não apenas as referências. 
Como resultado, as alterações feitas em um objeto não afetam o outro.
*/


// Método JSON.parse

//converte qualquer tipo de dado em um object

let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = {link: {a:"a", b: { c: "c"} } };

let clone1 = JSON.parse(JSON.stringify(Tenis));


console.log(1,clone1);
console.log(2,Tenis);

let mesclar1 = Object.assign(JSON.parse(JSON.stringify(Tenis)),JSON.parse(JSON.stringify(link)));
let mesclar2 = { ...JSON.parse(JSON.stringify(Tenis)),
                 ...JSON.parse(JSON.stringify(link)),
};

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(3,  clone1);
console.log(4,  Tenis);
console.log(5,  mesclar1);
console.log(6,  mesclar2);

// Para otimizar, usamos uma função para JSON.parse:

function cloneObject(objc) {
    return JSON.parse(JSON.stringify(objc));
};

clone1 = cloneObject(Tenis);

mesclar1 = Object.assign(
    cloneObject(Tenis),
    cloneObject(link),
);

console.log(7,  clone1);
console.log(8,  mesclar1);