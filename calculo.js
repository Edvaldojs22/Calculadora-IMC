const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const mensagemCaculo = document.querySelector(".resultado");
const textAviso = document.querySelector(".mensagem-aviso");
const aparecer = document.querySelector('#container-mensagem')
const botao = document.querySelector('#botao')

botao.addEventListener('click',() => {
  mostra() 

  var calculoimc = parseFloat(peso.value / (altura.value * altura.value));
  var imc = calculoimc.toFixed(1);

  mensagemCaculo.textContent = imc;


  if (imc <= 16) {
    textAviso.textContent = (" Você está muito abaixo do peso")
  }
  else if ((imc > 16) && (imc <= 18.49)) {
   textAviso.textContent = ("	Abaixo do peso")
  }

  else if ((imc > 18.5) && (imc <= 24.99)) {
   textAviso.textContent = (" Seu peso está normal")
  }

  else if ((imc > 25) && (imc <= 29.99)) {
   textAviso.textContent = ("Acima do peso");
  }

  else {
    textAviso.textContent = ("Você esqueceu de colocar suas informações")
  }
  

 
  
})
 
 function mostra() {
  aparecer.style.display = 'block'
}
 





