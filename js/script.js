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

/* Insere informações dos inputs nos card images 
   Inserts input information into the card images.*/
/* function cardImages(input, image) {
  input.addEventListener("input", function () {
    image.textContent = input.value;
  });
}

cardImages(inputNumber, cardFrontNumber);
cardImages(inputName, cardFrontName); */

/* Nova função */

/* function inserInfo(){
    
    inputNumber.addEventListener('input', function(){
        const cardFrontNumber = inputNumber.value;
        const newArray = new Array(cardFrontNumber);
        console.log(newArray);
    })
}

inserInfo(); */

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

function validaName() {
  const nameValue = inputName.value;
  console.log(nameValue);
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

btnComplete.addEventListener("click", showForm);
