'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientList = ingredients.map(item => {
    const list = document.createElement('li');
    list.textContent = item;
    
    return list;
  });

  document.querySelector('#ingredients').prepend(...ingredientList);
