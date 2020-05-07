'use strict';
const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', validator);

function validator(e) {
  if (e.currentTarget.value.length === 0) {
    validationInput.classList.remove('valid');
    validationInput.classList.remove('invalid');
  } else if (
    e.currentTarget.value.length === Number(validationInput.dataset.length)
  ) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
}
