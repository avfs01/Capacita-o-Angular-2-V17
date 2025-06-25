"use strict";
// Uma void é uma função que não possui valor de retorno
// sintaxe
// function semRetorno (a: string) => void
let pedido = (msg) => {
    console.log(msg);
    // return msg; Ocasionaria um erro pois a void não retorna nada
};
pedido("Deu bom!");
/*
 Ausência de Valor: Indica que a função não retorna nada útil.
 Compatibilidade com undefined: Em modo não estrito (strictNullChecks: false), void também aceita null.
 Diferente de undefined: Uma função void pode não ter return, mas uma função : undefined precisa retornar undefined explicitamente.
*/ 
