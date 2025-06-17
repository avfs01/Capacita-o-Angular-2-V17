let pedido: string = "Pizza";
pedido = "Pastel";

let numero: number = 123;
numero = 321;

let deuBom: boolean = false;
deuBom = true;  // Corrigido o nome da variável

let aa = 12345;

const fun = (value: number): string => {
    return value.toString(); // Converte number para string
}

const resultado = fun(aa);
console.log(resultado);        // "12345" (string)
console.log(typeof resultado); // "string"