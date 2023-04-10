var altura = document.querySelector("#altura");
var peso = document.querySelector("#peso");
var mensagem = document.querySelector(".resultado")
var mensagemAviso =document.querySelector(".mensagem-aviso")

function calculoImc(){
  
  var calculoimc = parseFloat(peso.value/ (altura.value * altura.value));
  var imc = calculoimc.toFixed(1);

  mensagem.innerHTML=imc;


  if(imc <= 16){
    mensagemAviso.innerHTML= (" Você está muito abaixo do peso")
  }
  else if((imc > 16)&& (imc <= 18.49)){
    mensagemAviso.innerHTML =("	Abaixo do peso")
  }

  else if((imc > 18.5) && (imc <= 24.99)){
    mensagemAviso.innerHTML=(" Seu peso está normal")
  }

  else if((imc > 25) && (imc <= 29.99)){
    mensagemAviso.innerHTML=("Acima do peso");
  }

  else {
    mensagemAviso.innerHTML=("Obesidade")
  }
}


document.querySelector('#botao').onclick = calculoImc;

