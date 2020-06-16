'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientList = ingredients.map((index) => {
    return index;
  });

 const container = document.createElement('ul');
 container.classList.toggle('ingredients');


 const newList = document.createElement('li');
 newList.textContent = `${ingredientList}`;

 container.appendChild(newList);

 console.log(container);