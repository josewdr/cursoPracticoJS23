const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const calcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

function Calcular(){
  const result = parseInt(numero1.value) + parseInt(numero2.value);
  resultado.innerHTML = "El resultado es " + result;    
}    

//calcular.onclick = Calcular;

calcular.addEventListener("click", Calcular);