// enum é um aglutinador de dados, podendo ser representado por valores específicos e padronizados
// Por padrão, enum vem baseada em índices, comecando do zero.
var EMes;
(function (EMes) {
    EMes[EMes["JAN"] = 0] = "JAN";
    EMes[EMes["FEV"] = 1] = "FEV";
    EMes[EMes["MAR"] = 2] = "MAR"; // indice 2
})(EMes || (EMes = {}));
console.log(EMes);
// É possivel referenciar o índice usando EnumNome.Valor
console.log(EMes.FEV); // retorna 1
// Podemos atribuir valores específicos a ele:
var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Mar\u00E7o";
    Mes["ABR"] = "Abril";
    Mes["MAI"] = "Maio";
    Mes["JUN"] = "Junho";
    Mes["JUL"] = "Julho";
})(Mes || (Mes = {}));
console.log(Mes.JAN); // retornando o valor de JAN com EnumNome.Valor
var pessoa = {
    nome: "Antonio",
    mesAniversario: Mes.JUL,
};
if (pessoa.mesAniversario === Mes.JUL) {
    console.log(pessoa);
}
