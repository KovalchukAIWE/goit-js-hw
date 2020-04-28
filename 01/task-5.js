'use strict';

let china = 'Китай';
let chili = 'Чили';
let australia = 'Австралия';
let іndіya = 'Индия';
let jamayka = 'Ямайка'; 


let price;
let userChoice = prompt('Укажите страну для доставки товара:');

let userChoiceInLC = userChoice.toLowerCase();

let chinaInLC = china.toLowerCase();
let chiliInLC = chili.toLowerCase();
let australiaInLC = australia.toLowerCase();
let іndіyaInLC = іndіya.toLowerCase();
let jamaykaInLC = jamayka.toLowerCase();

let message;


switch (userChoiceInLC) {
    case chinaInLC:
        price = 100;
        message = `Доставка в ${china} будет стоить ${price} кредитов`;
        break;
    
    case chiliInLC:
        price = 250;
        message = `Доставка в ${chili} будет стоить ${price} кредитов`;
        break;

     case australiaInLC:
        price = 170;
        message = `Доставка в ${australia} будет стоить ${price} кредитов`;
        break;
    
    case іndіyaInLC:
        price = 80;
        message = `Доставка в ${іndіya} будет стоить ${price} кредитов`;
        break;

    case jamaykaInLC:
        price = 120;
        message = `Доставка в ${jamayka} будет стоить ${price} кредитов`;
        break;

    default:
        alert('В вашей стране доставка не доступна');
}

console.log(message);