let nossoObjeto: number | string ; // operador : define os tipos que a variável vai assumir. operador | funciona como OR.

nossoObjeto = 123; // aceita 123 por ser number
console.log( Boolean(nossoObjeto)); // retorna true
console.log(nossoObjeto);
nossoObjeto = "123"; // se torna string
console.log(Boolean(nossoObjeto)); // retorna true  pois também aceita string
console.log(typeof nossoObjeto);