//Herança: Reutilizando Código

//Relação "é um". Estudante é uma Pessoa. Professor é uma Pessoa.
//Permite que uma classe (subclasse/filha) herde atributos e métodos de outra classe (superclasse/pai).
//Reuso de código e criação de hierarquias lógicas.

//Sintaxe extends: class Subclasse extends Superclasse {}.
//A Função super(): Dentro do constructor da subclasse, super() deve ser a primeira coisa a ser chamada. Ela 
// invoca o constructor da superclasse, permitindo que a parte "pai" do objeto seja inicializada corretamente.
//Sobrescrita de Métodos (Overriding): Uma subclasse pode fornecer uma implementação específica 
// para um método que já existe na sua superclasse.
console.log("OI")

// Classe Base (Superclasse)
class pessoa {
    #cpf; // Atributo privado

    constructor(nome, dataNascimento, cpf) {
        this.nome = nome; // Atributo público
        this.dataNascimento = dataNascimento;
        this.#cpf = cpf;
    }

    get cpf() {
        // Poderíamos ofuscar o CPF aqui, ex: ***.123.456-**
        return this.#cpf;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}

// Subclasse Estudante
class Estudante extends Pessoa {
    // Não precisa declarar #matricula aqui se for público na subclasse

    constructor(nome, dataNascimento, cpf, matricula) {
        // Chama o construtor da classe Pessoa
        super(nome, dataNascimento, cpf);

        // Adiciona os atributos específicos de Estudante
        this.matricula = matricula;
        this.notas = [];
    }

    // Sobrescrevendo o método da classe pai
    apresentar() {
        console.log(`Olá, eu sou o estudante ${this.nome} de matrícula ${this.matricula}.`);
    }

    // Métodos específicos de Estudante...
    adicionarNota(nota) {
        this.notas.push(nota);
    }
}

// Subclasse Professor
class Professor extends Pessoa {

    constructor(nome, dataNascimento, cpf, idFuncional) {
        super(nome, dataNascimento, cpf);
        this.idFuncional = idFuncional;
        this.disciplinas = [];
    }

    // Herdando o método apresentar() original da Pessoa, sem sobrescrever
}

/*
const pessoaComum = new Pessoa("José Ninguém", "1980-01-01", "111.222.333-44");
const estudanteJoana = new Estudante("Joana D'arc", "2005-05-05", "555.666.777-88", "E2023005");
const profTiago = new Professor("Tiago Segato", "1975-10-10", "999.888.777-66", "P00JS");

// Exemplo de Polimorfismo
pessoaComum.apresentar();    // "Olá, meu nome é José Ninguém."
estudanteJoana.apresentar(); // "Olá, eu sou o estudante Joana D'arc de matrícula E2023005."
profTiago.apresentar();    // "Olá, meu nome é Tiago Segato." (usou o método da classe Pessoa)

console.log(`${estudanteJoana.nome} tem o CPF: ${estudanteJoana.cpf}`); // Acessando getter herdado
*/

// POLIMORFISMO
// "Muitas formas". A capacidade de um método se comportar de maneira diferente dependendo do objeto que o invoca.
// Vimos isso com o método apresentar(). A mesma chamada (pessoa.apresentar()) produziu resultados diferentes 
// para um Estudante e para uma Pessoa ou Professor.
// Permite escrever código mais genérico e flexível. 