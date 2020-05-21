'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


user.mood = 'happy';
console.log(user.mood);


user.hobby = 'skydiving';
console.log(user.hobby);

user.premium = false;
console.log(user.premium);


const keys = Object.keys(user);
for (const key of keys) {
  console.log('Value: ', user[key]);
}