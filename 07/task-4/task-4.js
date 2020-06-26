let counterValue = 0;

function increment() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

const incrementButton = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementButton = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);