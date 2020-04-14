'use strict';

const china = 'Китай';
const searchChina = 'КиТаЙ';

const chili = 'Чили';
const australia = 'Австралия';
const іndіya = 'Индия';
const jamayka = 'Ямайка'; 

// ===============================================================
// Введення значення верхнього та нижнього реєстру:

const chinaInLC = china.toLowerCase();
const searchChinaInLC = searchChina.toLowerCase();
const passed = chinaInLC.includes(searchChinaInLC);

console.log(passed);


// Виконав як у вебінарі до першого модулю. Працює при виведенні в console як "true" або "false". Як правильно вивести при введенні значення в prompt поки не знаю)
// ===============================================================


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