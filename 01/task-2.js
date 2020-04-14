'use strict';

const total = 100;

const ordered = 130;

if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
}

if (ordered > total) {
    console.log('На складе недостаточно твоаров!');
}
