/* Falsy pode ser definido como um conjunto de valores que são avaliados como verdadeiro ou falso em contexto booleanos
como em estruturas de if , else if, while.

Valores[  booleano false, 0, "" Uma string vazia, null, undefined, NaN ]

Truthy são aqueles considerados como true, praticamente todos os valores são "truthy", exceto os explicitamente considerados falsy.

Valores[  true, Qualquer valor diferente de 0, strings não vazias, arrays ou objetos, funções  ]
*/

const truthOrFalse = [
    false,
    0,
    "",
    null,
    undefined,
    NaN,
    true,
    1,
    -42,
    3.14,
    "Hello World!",
    [],
    {},
    () => {},
];

console.log(
    truthOrFalse.map((item)  => {
        return `${item} é ${Boolean(item)}`;
    } )

);
