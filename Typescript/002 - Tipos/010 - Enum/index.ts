// enum é um aglutinador de dados, podendo ser representado por valores específicos e padronizados

// Por padrão, enum vem baseada em índices, comecando do zero.

enum EMes {
    JAN, // indice 0
    FEV, // indice 1
    MAR // indice 2
}
console.log(EMes);

// É possivel referenciar o índice usando EnumNome.Valor

console.log(EMes.FEV) // retorna 1

// Podemos atribuir valores específicos a ele:

enum Mes {
 JAN = "Janeiro",
 FEV = "Fevereiro",
 MAR = "Março",
 ABR = "Abril",
 MAI = "Maio",
 JUN = "Junho",
 JUL = "Julho",
}
console.log(Mes.JAN) // retornando o valor de JAN com EnumNome.Valor

const pessoa: {nome: string, mesAniversario:string} = {
    nome: "Antonio",
    mesAniversario: Mes.JUL,
}

if (pessoa.mesAniversario === Mes.JUL) {
    console.log(pessoa);
}