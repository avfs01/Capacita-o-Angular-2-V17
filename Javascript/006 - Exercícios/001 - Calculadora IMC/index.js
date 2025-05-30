// Calculadora de IMC
// Exercício prático durante a capacitação.

// IMC == peso (kg) / (altura² em metros);

const peso = 75;
const altura = 1.75;
const imc = Number((peso /(altura*altura)).toFixed(2)); // Funções aprendidas: .toFixed() usada para formatar um numero em casas decimais específicas


console.log("IMC = ", imc);

switch (true) { // Uso de switch para valores predefinidos
    case imc < 17:
        console.log("Muito abaixo do peso");
        break;
    case imc >= 17 &&  imc <= 18.49:
        console.log("Abaixo do peso");
        break;
    case imc >= 18.5 && imc <= 24.99:
        console.log("Peso normal");
        break;
    case imc >= 25 && imc <= 29.99:
        console.log("Acima do peso");
        break;
    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I");
        break;
    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade II");
        break;
}