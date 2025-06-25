"use strict";

// o Encadeamento Opitional (opitional chaining) permite que verifiquemos se o objeto é nulo ou indefinido.

// sintaxe:

/*
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
*/

//  acessa valores de objetos aninhados

// sem o operador
/*
const Obj = cidade.Brasilia && cidade.Brasilia.Plano;

// com o operador

const Obj2 = cidade?.Brasilia?.Plano;
*/

// Exemplo Prático:

type AlbumAPI = {
    titulo:string;
    artista?:{
        nome: string;
        idade: number;
        bio: string;
    }
}

const album: AlbumAPI = {
    titulo: "Apetite for Destruction",
    artista:{nome: `Guns'n Roses`,idade:1985, bio:"Guns N' Roses é uma banda americana de hard rock formada em Los Angeles, Califórnia, em 1985, resultado da fusão entre as bandas locais L.A. Guns e Hollywood Rose."
    }};

// Com o operador:

const bioArtista = album?.artista?.bio;

if (album.artista) {
    Object.entries(album.artista).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`);
    });
}

/*
const fn = (nome: string, idade?: number) => {
    if(!idade) {
        return `nome: ${nome}, idade: sem valor definido`;
    }
    return `nome: ${nome}, idade: ${idade}`;
}
console.log(fn("Antonio",23));

const pessoa: {nome: string; idade?: number} = {nome: "Antonio"};
console.log((fn("Antonio",23)));
*/
