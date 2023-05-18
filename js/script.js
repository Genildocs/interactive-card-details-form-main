'use strict';

/* 1º Validar se o campo number só contem numeros
   2º Validar os campos de data e cvc se foram inserido apenas numeros e a quantidade correta de numeros
   3º Deixar o foco nos campos que não foram preenchidos corretamente ou que esteja faltando dados  */

/* info das img dos card */
const cardFrontNumber = document.querySelector('.heading-2');


/* inputs do form */
const form = document.getElementsByTagName('form')[0];
const error = document.querySelector('.error');
const overlay = document.querySelector('.overlay');
const hidden = document.querySelector('.hidden');
const inputName = document.getElementById('input-name');
const complete = document.querySelector('.complete');
const btnComplete = document.querySelector('.btn-complete');


const dateNumber1 = document.getElementById('input-date-1').value;
const dateNumber2 = document.getElementById('input-date-2').value;
const cvcNumber = document.getElementById('input-cvc').value;


/* Valida o campo input-number */
function validaNumber(){

    const inputNumber = document.getElementById('input-number').value;       

    if(inputNumber.length !== 16 || inputNumber === ''){
        error.textContent = "Wrong format, numbers only"
        return false;
    }else{
        if(isNaN(inputNumber)){
            error.textContent = "Wrong format, numbers only"
            return false;
        }else{
            return true;
        }
    }

    
}

console.log(validaNumber());

form.addEventListener('submit', function(event){
    event.preventDefault();  
        
    
    if(validaNumber()){
        form.classList.toggle('hidden');
        complete.classList.toggle('hidden');
    }    
    
    

})

btnComplete.addEventListener('click', function(){
    form.classList.toggle('hidden');
    complete.classList.toggle('hidden');
    document.location.reload();
})
  