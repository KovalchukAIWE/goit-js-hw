'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

let userChoice = prompt('Please enter admin password:');

if(userChoice === null) {
    message = 'Отменено пользователем';
} 

else if(userChoice === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}

else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);