// Typescript
// npm install -g typescript
// tsc --init


// Plugin: code runner
// npm i -g ts-node
//ctrl + alt + n

console.log("npm install -g typescript");

const pedido = (pedido: string) => {
    return `Deu bom o seu pedido ${pedido}`;
}

console.log(pedido("123"));