/*
    Quando temos um código js grande para ser linkado em uma página HTML, podemos
    Podemos transformar esse código em vários arquivos e linkar com <script src="nomeDoArquivo.js"></script>

    A partir dessa visão podemos declarar a função do módulo como algo semelhante.

    Eles são uma forma moderna de organizar códigos e arquivos separados, permitindo:

    * Encapsulamento de funcionalidades.
    * Reutilização de códigos entre projetos.
    * Controle preciso das dependências.

    */

    // Exportação

    // math.ts - Exportações nomeadas
export const PI = 3.1416;

export function soma(a: number, b: number): number {
  return a + b;
}

// model.ts - Exportação padrão
export default class Usuario {
  constructor(public nome: string) {}
}


// Boas práticas:

// * Estrutura modular clara
// * Evitar módulos muito grandes( Ideal: 1 a 3 exportações por arquivo );
// * Use tipagem explícita.