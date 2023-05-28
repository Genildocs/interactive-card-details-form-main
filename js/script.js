/* INPUTS FORM */
const form = document.getElementsByTagName("form")[0];
const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputCvc = document.getElementById("input-cvc");
const inputMonth = document.getElementById('input-date-1');
const inputYear = document.getElementById('input-date-2');


/* INPUTS ERROS AND COMṔLETE*/
const error = document.querySelector(".error");
const complete = document.querySelector(".complete");

/* Buttons */
const btnComplete = document.querySelector(".btn-complete");

/* info das img dos card */
const cardFrontNumber = document.querySelector(".heading-2");
const cardFrontName = document.querySelector(".card-front__name");
const cardBackCvc = document.querySelector('.card-back__p');
const cardFrontDate = document.querySelector('.card-front__validity');

/* Insere informações dos inputs nos card images 
   Inserts input information into the card images.*/

function formateName(value){
  if(!value){
    return 'Jane Appleseed';
  }else{
    return value;
  }
}
function nameInfo(){
  const nameValue = inputName.value;
  cardFrontName.textContent = formateName(nameValue);
}

function formateNumber(value){
  if (!value){
    return '0000 0000 0000 0000';
  }else{
    return value.replace(/(\d{4})(?=(\d{4})+$)/g, '$1 ')
  }
}
function numberInfo(){
    const numberValue = inputNumber.value;
    cardFrontNumber.textContent = formateNumber(numberValue);
}


function formatCvc(value){
  if(!value){
    return '000';
  }else{
    return value;
  }
}
function cvcInfo(){
   const cvcValue = inputCvc.value;
   cardBackCvc.textContent = formatCvc(cvcValue);
}

function formateDate(value){
  if (!value){
   return '00/00';
  }else{
  return value;
  }
}
function dateInfo(){
  const arrayDate = [];
  arrayDate.push(inputMonth.value, inputYear.value);
  const [month, years] = arrayDate;
  const formatDate = [month, '/', years];
  cardFrontDate.textContent = formatDate.join('');
}

/* Verifica se os campos de input são validos
   Check if the input fields are valid. */
const validaInput = (value) => (!(isNaN(value) || value === ""));

/***********************************************/
function showForm() {
  form.classList.toggle("hidden");
  complete.classList.toggle("hidden");
}

const showError = () => error.textContent = "Enter numbers only.";

/*Event submit*/
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isInputValid = validaInput(inputNumber.value) &&
                       validaInput(inputCvc.value) &&
                       validaInput(inputMonth.value) &&
                       validaInput(inputYear.value)
  if (isInputValid) {
    showForm();
  } else {
    showError();
  }
});


inputMonth.addEventListener('input', dateInfo);
inputYear.addEventListener('input', dateInfo);
inputName.addEventListener('input', nameInfo);
inputCvc.addEventListener('input', cvcInfo);
inputNumber.addEventListener('input', numberInfo);
btnComplete.addEventListener("click", function (){
  showForm();
  window.location.reload();
});


