// O escopo determina quais dados podem ser acessados em uma determinada parte do código.
// Existem os escopos globais que são acessados globalmente e os locais que são limitados a trechos do código

// Exemplo:
let nome = "Amaral"; // variável definida em escopo global (fora de qualquer bloco de código)
{ // Bloco de código
    console.log( nome ); // consegue acessar a variável, logo retorna seu valor
} 
// Exemplo 2:

{ // Bloco de código
    let nome = "Amaral"; // variável definida dentro do escopo
}
console.log( nome ); // Não consegue acessar a variável, logo retorna erro de variável não definida

// como var é declarada automaticamente como global, nesse caso, o console.log retornaria o nome, porém deve-se ter muito cuidado ao usar variáveis globais, em contextos bem específicos