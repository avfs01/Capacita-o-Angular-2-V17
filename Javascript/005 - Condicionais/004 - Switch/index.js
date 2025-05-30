// A condição switch é usada para executar cada bloco de código de acordo com cada opção especificada. Seu uso é recomendado quando os valores a serem analisados nessas condições são pré-definidos.

const mes = 5;

if (mes == 1) { 
    console.log("Janeiro");
} else if(mes == 2){
    console.log("Fevereiro");
} // Perceba que para diversas variáveis o código ficaria gigantesco e inviável, dificultando a legibilidade e a manutenção

switch (mes) {
    case 1:
        console.log("Janeiro");
        break; // A estrutura sempre deve terminar com um break para caso for atendida, parar.

    case 2:
        console.log("Fevereiro");
        break;
    case 5:
        console.log("Maio");
        break;
    default: // Caso nenhuma condição for atendida, retorna o default;
        console.log("Mês não encontrado");
        break;
}