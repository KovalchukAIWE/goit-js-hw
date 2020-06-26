'use strict';

const validationInput = document.querySelector('#validation-input');

function validationInputBlur() {
  if (validationInput.value.length === 6) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}

validationInput.addEventListener('blur', validationInputBlur);