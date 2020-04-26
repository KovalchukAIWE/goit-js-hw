'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let message;

let totalPrice = prompt('Сколько дроидов вы хотите приобрести?');


if(Number(totalPrice) < (credits - (pricePerDroid * totalPrice))) {
    message = `Вы купили ${Number(totalPrice)} дроидов, на счету осталось ${credits - (pricePerDroid * totalPrice)} кредитов.`;
}
else if(Number(totalPrice) > (credits - (pricePerDroid * totalPrice))) {
    message = `Недостаточно средств на счету!`;
}

if(totalPrice === null) {
    message = 'Отменено пользователем!';
}

console.log(message);


