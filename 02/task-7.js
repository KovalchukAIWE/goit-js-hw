'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

let message;


const isLoginValid = function(login) {
  return login === string (
      message('Логин успешно добавлен!'));
  
};

const isLoginUnique = function(allLogins, logins) {
  return allLogins === logins (
      message('Такой логин уже используется!'));
  
};

const addLogin = function(allLogins, logins) {
  return allLogins !== logins;
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'