/*

public:

podem ser acessados tanto pela mesma classe, classes filhas e outras classes.

protected:

Pode ser acessado pela mesma classse e classes filhas, não pode ser acessado por outras classes.

private:

Pode ser acessada somente pela própria classe.

*/

class  Privado {
    private nome: string = "";
    private idade: number = 0;

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    }
    protected fezAniversario(){
        return `O ${this.nome} fez ${this.idade+1} anos`;
    }
}

const TentadoAcesso = new Privado("Antonio",23);

// Ao tentar acessar os dados de TentandoAcesso usando TentandoAcesso.nome ou TentandoAcesso.fezAniversario , é retornado um erro, pois os acessos estão limitados ao escopo da classe

// Usando TentandoAcesso.comer ele me permite, pois está declarada como public.

// por boas práticas nomes de atributos private são declarados com underline na frente, exemplo: _textoPrivado: string =  "Insira o texto";