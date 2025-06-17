/*
 As funções construtoras são úteis quando queremos criar objetos com os mesmos tipos

*/

function Nome(nome,sobrenome){ // Função recebe dois parâmetros
    this.nome = nome; // this apontando para o objeto que receberá nome
    this.sobreNome = () => { // arrow function para o sobrenome
        const nomeCompleto = `${this.nome} ${sobrenome}`; //função nome completo chamando nome + sobrenome
        return nomeCompleto; // função retorna os valores
    };
}

const Amaral = new Nome("Lucas","Amaral"); // variável chamando a função Nome e usando new para atribuir novos valores aos parâmetros

console.log(Amaral.sobreNome());

// É considerado uma boa prática nomear funções construtoras com a primeira letra maiúscula.

/* Usamos .this dentro da função para referenciar o objeto que está sendo criado e definir propriedades e métodos
   Criado o objeto, usamos new para criar um novo objeto e chamar os novos valores a serem atribuidos naquele objeto.
*/