/*
  Índices:
    Os arrays possuem indices, começando no 0
    para acessarmos os índices podemos usar:
*/

const meuArray = [1,2,3,4,true,"Amaral",]

console.log(meuArray);

// Para visualizarmos melhor nosso array podemos usar o console.table();

console.table(meuArray);


/*    Retorna
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 1        │
│ 1       │ 2        │
│ 2       │ 3        │
│ 3       │ 4        │
│ 4       │ true     │
│ 5       │ 'Amaral' │
└─────────┴──────────┘
*/

// Para acessar um índice específico do array:

console.log(meuArray[5]);


// Para ver quantos índices temos no array temos o .lenght

console.log(meuArray.length);