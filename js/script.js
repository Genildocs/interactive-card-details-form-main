'use strict';

const form = document.getElementsByTagName('form')[0];
const error = document.querySelector('.error');
const inputName = document.getElementById('input-name');
const cvc = document.getElementById('input-cvc');

function validaName(){
    const regex = /a/;
  if (!regex.test(inputName.value)) {
    error.textContent = "Por favor, insira somente letras.";
    inputName.value = "";
  }
}

/* form.addEventListener("submit", function(event){
    if(!cvc.validity.valid){
        error.innerHTML = "Campo obrigatorio!"
        event.preventDefault();
    }
},false);
console.log(cvc.value); */

form.addEventListener("submit", function(){
    
    validaName();
    
})



