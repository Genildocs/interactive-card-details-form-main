'use strict';

/* 1º Validar se o campo number só contem numeros
   2º Validar os campos de data e cvc se foram inserido apenas numeros e a quantidade correta de numeros
   3º Deixar o foco nos campos que não foram preenchidos corretamente ou que esteja faltando dados  */

const form = document.getElementsByTagName('form')[0];
const error = document.querySelector('.error');
const inputName = document.getElementById('input-name');
const inputNumber = document.getElementById('input-number');
const dateNumber1 = document.getElementById('input-date-1');
const dateNumber2 = document.getElementById('input-date-2');
const cvcNumber = document.getElementById('input-cvc');
const complete = document.querySelector('.complete');
const btn = document.querySelector('.btn');
console.log(complete);

function validaCardNumber(){
  const inputNumber = parseInt(inputNumber.value);
  console.log(inputNumber);
}


form.addEventListener("submit", function(){
  
    complete.style.display = "block";
})



