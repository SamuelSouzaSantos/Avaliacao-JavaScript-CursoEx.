//1. Cálculo de Desconto Progressivo: 
let valorCompra = 2000
let percentualDesconto = 0
if (valorCompra>= 1000){
    percentualDesconto = 0.20
}else if (valorCompra>=500){
    percentualDesconto = 0.10
}
let valorFinal = valorCompra * (1 - percentualDesconto)
console.log(`Valor final: R$${valorFinal}`)

//2. Sistema de Pontos de Fidelidade
let categoria = "Prata"
let pontos 

switch (categoria){
    case "Ouro":
        pontos = 20
        break
    case "Prata":
        pontos = 15
        break
    case "Bronze":
        pontos = 10
        break
    default:
        pontos = "Categoria inválida"
} console.log(`Pontuação: ${pontos}`)

//3. Sequência de Fibonacci
let numero0 = 0
let numero1 = 1
console.log(`${numero0}\n${numero1}`)
for (let i = 0; i <8; i++){
    let proximoNumero = numero0 + numero1
    console.log(proximoNumero) 
    numero0 = numero1
    numero1 = proximoNumero
}

//4. Simulador de Bateria
let nivelBateria = 100
while (nivelBateria > 0){
    console.log(nivelBateria)
    nivelBateria = nivelBateria -10
}
console.log("Bateria Esgotada")

//5. Função para Calcular Dias de vida
function calcularDiasDeVida(idadeEmAnos) {
    const totalDias = idadeEmAnos * 365
    return totalDias
}

let idade = 19
let totalDias = calcularDiasDeVida(idade)
console.log(`Uma pessoa de ${idade} anos viveu aproximadamente ${totalDias} dias`)

//6.Verificador de Aprovação Escolar 
let nota1 = 8
let nota2 = 6
let nota3 = 5
let nota4 = 10
let frequencia = 75
mediaNota= (nota1+nota2+nota3+nota4)/4
if (mediaNota >=6 && frequencia>=75){
    console.log("Aprovado")
}else{console.log("Reprovado")}

//.7 Menor Número da Lista
let listaDeNumero = [1,2,3,4,5,6,7,8,9,10]
let maiorNumero = listaDeNumero[0]
for (let numero of listaDeNumero){
    if (numero > maiorNumero){
        maiorNumero = numero
    }
}
console.log(`Maior número é ${maiorNumero}`)