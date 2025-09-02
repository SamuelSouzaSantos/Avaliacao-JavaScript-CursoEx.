class Funcionario {
    #salario
    idFuncional

    constructor(home, idFuncional, salario) {
        if (this.constructor === Funcionario) {
            throw new Error("Classe abstrata 'Funcionario' não pode ser instanciada.")
        }
        this.home = home
        this.idFuncional = idFuncional
        this.setSalario(salario)
    }
    
    getSalario() {
        return this.#salario
    }
    
    setSalario(salario) {
        if (typeof salario === 'number' && salario > 0) {
            this.#salario = salario
            console.log(`Salário R$${salario.toFixed(2)} definido para ${this.home}.`)
        } else {
            console.log('Erro: Salário inválido. O valor deve ser um número positivo.')
        }
    }
    
    descreverFuncao() {
        throw new Error("O método 'descreverFuncao' deve ser implementado pela classe filha.")
    }
}

class Medico extends Funcionario {
    #especialidades
    crm

    constructor(home, idFuncional, salario, crm) {
        super(home, idFuncional, salario)
        this.crm = crm
        this.#especialidades = []
    }
    
    adicionarEspecialidade(especialidade) {
        if (especialidade instanceof Especialidade) {
            this.#especialidades.push(especialidade)
            console.log(`Especialidade "${especialidade.nome}" adicionada para ${this.home}.`)
        } else {
            console.log('Erro: O parâmetro deve ser uma instância da classe Especialidade.')
        }
    }
    
    descreverFuncao() {
        const especialidadesNomes = this.#especialidades.map(e => e.nome).join(', ')
        return `${this.home} é um Médico. CRM: ${this.crm}. Especialidades: ${especialidadesNomes || 'Nenhuma'}.`
    }
}

class Especialidade {
    nome
    codigo
    descricao

    constructor(nome, codigo, descricao) {
        this.nome = nome
        this.codigo = codigo
        this.descricao = descricao
    }
    
    obterDetalhes() {
        return `Especialidade: ${this.nome} (${this.codigo}), Descrição: ${this.descricao}.`
    }
}

class Agenda {
    data
    descricao
    #responsavel

    constructor(data, descricao, responsavel) {
        this.data = data
        this.descricao = descricao
        this.#responsavel = responsavel
    }
    
    getData() {
        return this.data
    }

    getDescricao() {
        return this.descricao
    }
    
    reagendar(novaData) {
        this.data = novaData
        console.log(`Agenda reagendada para a nova data: ${this.data}`)
    }
}

class Secretaria extends Funcionario {
    #agendas
    ramal

    constructor(home, idFuncional, salario, ramal) {
        super(home, idFuncional, salario)
        this.ramal = ramal
        this.#agendas = []
    }
    
    criarAgendamento(data, descricao, responsavel) {
        const novaAgenda = new Agenda(data, descricao, responsavel)
        this.#agendas.push(novaAgenda)
        console.log(`Novo agendamento criado e adicionado para ${this.home}.`)
    }
    
    descreverFuncao() {
        return `${this.home} é uma Secretária com ramal ${this.ramal} e ela marca consultas.`
    }
    
    listarAgendas() {
        if (this.#agendas.length === 0) {
            console.log(`${this.home} não tem agendamentos registrados.`)
            return
        }
        console.log(`\nAgendamentos de ${this.home}:`)
        this.#agendas.forEach((agenda, index) => {
            console.log(`- Agendamento ${index + 1}: Data: ${agenda.data}, Descrição: ${agenda.descricao}`)
        })
    }
}

// Exemplos do uso de todo o código:

console.log('--- Exemplo de Medico e Especialidade (Agregação) ---')
const espCardiologia = new Especialidade('Cardiologia', 'C101', 'Tratamento de doenças do coração.')
const medico = new Medico('Dr. João', 'MED-123', 18000, 'CRM-456')

medico.adicionarEspecialidade(espCardiologia)
console.log(medico.descreverFuncao())

console.log(espCardiologia.obterDetalhes())

console.log('\n--- Exemplo de Secretaria e Agenda (Composição) ---')
const secretaria = new Secretaria('Ana', 'SEC-001', 4000, 1234)

secretaria.criarAgendamento('10/10/2025', 'Consulta de rotina', 'Dr. João')
secretaria.listarAgendas()
