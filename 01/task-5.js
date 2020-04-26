'use strict';

const china = 'кИтАЙ';
const chili = 'Чили';
const australia = 'Австралия';
const іndіya = 'Индия';
const jamayka = 'Ямайка'; 

const chinaInLC = china.toLowerCase();


let userChoice = prompt('Укажите страну для доставки товара:');

let message;

switch (userChoice) {
    case china:
        message = 'Доставка в Китай будет стоить 100 кредитов';
        break;
    
    case chili:
        message = 'Доставка в Чили будет стоить 250 кредитов';
        break;

     case australia:
        message = 'Доставка в Австралию будет стоить 170 кредитов';
        break;
    
    case іndіya:
        message = 'Доставка в Индию будет стоить 80 кредитов';
        break;

    case jamayka:
        message = 'Доставка в Ямайку будет стоить 120 кредитов';
        break;

    default:
        alert('В вашей стране доставка не доступна');
}

console.log(message);