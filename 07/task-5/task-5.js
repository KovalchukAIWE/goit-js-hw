'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputStranger(event) {
  nameInput.value
    ? (nameOutput.textContent = event.currentTarget.value)
    : (nameOutput.textContent = 'незнакомец');
}

nameInput.addEventListener('input', inputStranger);