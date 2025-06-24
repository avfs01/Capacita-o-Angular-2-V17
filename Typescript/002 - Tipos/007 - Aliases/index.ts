// Aliases pode ser definido como um "apelido" para variável

// sintaxe 

// type apelido = tiposDoApelido (string, boolean, number, etc...)

type alfanumericos = string | number;

let dados: alfanumericos;

dados = 1;
dados = "Antonio";
// dados = true; retorna erro, booleanos não estão definidos para minha alias alfanumericos

