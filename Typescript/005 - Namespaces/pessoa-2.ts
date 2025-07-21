import {Pessoa1} from "./pessoa-1";
import { IPessoax } from "./pessoa-1";

const x:  IPessoax = {
    nome: "Teste de Retorno",
}

console.log((x.nome));
console.log(`Puxando ${Pessoa1.nome} no arquivo pessoa-2.ts`);

import { Pessoa } from "./namespace-aninhado"; 