/* INPUTS FORM */
const form = document.getElementsByTagName("form")[0];
const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputCvc = document.getElementById("input-cvc");
const inputDates = ["input-date-1", "input-date-2"];
/* INPUTS ERROS AND COMṔLETE*/
const error = document.querySelector(".error");
const complete = document.querySelector(".complete");

/* Buttons */
const btn = document.querySelector(".btn");
const btnComplete = document.querySelector(".btn-complete");

/* info das img dos card */
const cardFrontNumber = document.querySelector(".heading-2");
const cardFrontName = document.querySelector(".card-front__name");
const cardBackCvc = document.querySelector('.card-back__p');

/* Insere informações dos inputs nos card images 
   Inserts input information into the card images.*/
function numberInfo(){
  if(!inputNumber.value){
    cardFrontNumber.textContent = '0000 0000 0000 0000';
  }else{
    const numberValue = inputNumber.value;
    cardFrontNumber.textContent = numberValue.replace(/(\d{4})(?=(\d{4})+$)/g, '$1 ');
  }    
}

function cvcInfo(){
  if(!inputCvc.value){
    cardBackCvc.textContent = '000';
  }else{
    const cvcValue = inputCvc.value;
    cardBackCvc.textContent = cvcValue;
  }
}



/* Verifica se os campos de input number e input cvc são validos
   Check if the input fields for 'number' and 'CVC' are valid. */
function validaInput(valor) {
  if (isNaN(valor) || valor === "") {
    return false;
  } else {
    return true;
  }
}

/* Verifica se o campo input-date é valido
   Check if the input field 'input-date' is valid. */
function validaDate() {
  let valid = true;
  for (let i = 0; i < inputDates.length; i++) {
    const inputsValue = document.getElementById(inputDates[i]).value;

    if (isNaN(inputsValue) || inputsValue === "") {
      valid = false;
    }
  }

  return valid;
}

function showForm() {
  form.classList.toggle("hidden");
  complete.classList.toggle("hidden");
}

function showError() {
  error.textContent = "Enter numbers only.";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validaName();

  if (
    validaInput(inputNumber.value) &&
    validaInput(inputCvc.value) &&
    validaDate()
  ) {
    showForm();
  } else {
    showError();
  }
});

inputCvc.addEventListener('input', cvcInfo);
inputNumber.addEventListener('input', numberInfo);
btnComplete.addEventListener("click", showForm);
