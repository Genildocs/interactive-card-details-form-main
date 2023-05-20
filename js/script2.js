/* INPUTS FORM */
const form = document.getElementsByTagName('form')[0];
const inputNumber = document.getElementById('input-number');
const inputCvc = document.getElementById('input-cvc');

/* INPUTS ERROS AND COMṔLETE*/
const error = document.querySelector('.error');
const complete = document.querySelector('.complete');

/* Buttons */
const btn = document.querySelector('.btn');
const btnComplete = document.querySelector('.btn-complete');


/* Verifica se os campos de input number e input cvc são validos
   Check if the input fields for 'number' and 'CVC' are valid. */
function validaInput(valor){

    if(isNaN(valor) || valor === ''){        
        return false;
    }else{        
        return true;
    }
}

/* Verifica se o campo input-date é valido
   Check if the input field 'input-date' is valid. */
function validaDate(){
    const inputDates = ['input-date-1', 'input-date-2'];
    let valid = true;
    for(let i = 0; i < inputDates.length; i++){
        const inputsValue = document.getElementById(inputDates[i]).value;
        
        if(isNaN(inputsValue) || inputsValue === ''){            
            valid = false;
        }
    }

    return valid;
}



form.addEventListener("submit", function(event){
    event.preventDefault();
    
    if(validaInput(inputNumber.value) && validaInput(inputCvc.value) && validaDate()){
        form.classList.toggle('hidden');
        complete.classList.toggle('hidden');
    }else{
        error.textContent = "Enter numbers only.";
    }
    
})

btnComplete.addEventListener('click', function(){
    form.classList.toggle('hidden');
    complete.classList.toggle('hidden');
})