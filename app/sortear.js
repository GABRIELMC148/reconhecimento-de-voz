const menorNumero =1
const maiorrNumero =1000
const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio() {
    return parseInt(Math.random()*maiorrNumero + 1)
}
console.log('Número Secreto:',numeroSecreto)

const elemntoMenorValor = document.getElementById('menor-valor')
elemntoMenorValor.innerHTML = menorNumero

const elemntoMaiorValor = document.getElementById('maior-valor')
elemntoMaiorValor.innerHTML = maiorrNumero