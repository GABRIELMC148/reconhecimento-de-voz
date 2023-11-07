function chutePossuiValorValido(chute){
 const numero = +chute 

 if(chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor invalido</div>'
    return   
 } 
 if(numeroMaiorMenor(numero)){
    elementoChute.innerHTML +=`<div>Valor invalido: o número secreto precisa estar entre ${menorNumero} e ${maiorrNumero}</div>`
    return   
 }
 if (numero === numeroSecreto){
   document.body.innerHTML =`
   <h1>Você acertou!</h1> 
   <h3>o número secreto era ${numeroSecreto}</h3>
   <button id="jogar-novamente" class="btn">Jogar Novamente </button>` 

 }else if (numero < numeroSecreto) {
   elementoChute.innerHTML += `<div>O número secreto e maior <i class="fa-solid fa-arrow-up"></i></div>`
 } else {
   elementoChute.innerHTML += `<div>O número secreto e menor <i class="fa-solid fa-arrow-down"></i></div>`
 }


}

function chuteInvalido(numero) {
    return Number.isNaN(numero)   
    } 

function numeroMaiorMenor(numero){
 return numero > maiorrNumero || numero < menorNumero  
}
document.body.addEventListener('click', e =>{
  if (e.target.id == 'jogar-novamente'){
   window.location.reload()
  } 
})