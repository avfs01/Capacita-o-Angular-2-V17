let Tenis = {
    tamanho: 45, // Iniciamos o valor do objeto como 45
    estoque: true,
};
Tenis["preco"] = "R$42"; 
console.log(Tenis);

console.log(Tenis["preco"]); // Retorna "R$42"

const pessoas = ['Pedro','Maria','João']
    const todasAsPessoas = [...pessoas,'Marcus','Tiago']
    console.log(pessoas);
    console.log(...todasAsPessoas);
