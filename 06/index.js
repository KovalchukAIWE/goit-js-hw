'use strict';

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

///////////////////////////////////////////////////////task-1///////////////////////////////////////////////////

function getUserNames(users) {
  return users.map((user) => user.name);
};

console.log('task-1', getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]




///////////////////////////////////////////////////////task-2///////////////////////////////////////////////////

function getUsersWithEyeColor(users, color) {
 return users.filter((user) => user.eyeColor === color);
}
console.log('task-2', getUsersWithEyeColor(users, 'blue')); 
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]




///////////////////////////////////////////////////////task-3///////////////////////////////////////////////////

function getUsersWithGender (users, gender) {
  return users.filter((user) => user.gender === gender).map((user) => user.name);
}

console.log('task-3', getUsersWithGender(users, 'male')); 
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson'



///////////////////////////////////////////////////////task-4///////////////////////////////////////////////////

function getInactiveUsers(users) {
  return users.filter((user) => !user.isActive);
} 
 
console.log('task-4', getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


  
///////////////////////////////////////////////////////task-5///////////////////////////////////////////////////

function getUserWithEmail(users, email) {
  return users.find((user) => user.email === email);
} 
  
console.log('task-5.1', getUserWithEmail(users, 'shereeanthony@kog.com')); 
// {объект пользователя Sheree Anthony}
console.log('task-5.2', getUserWithEmail(users, 'elmahead@omatom.com')); 
// {объект пользователя Elma Head}



///////////////////////////////////////////////////////task-6///////////////////////////////////////////////////

function getUsersWithAge(users, min, max) {
  return users.filter((user) => user.age > min && user.age < max);
}
      
console.log('task-6.1', getUsersWithAge(users, 20, 30)); 
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log('task-6.2', getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


  
///////////////////////////////////////////////////////task-7///////////////////////////////////////////////////

function calculateTotalBalance(users) { 
return users.reduce((total, value) => total + value.balance, 0);
}
    
console.log('task-7', calculateTotalBalance(users)); // 20916



  
///////////////////////////////////////////////////////task-8///////////////////////////////////////////////////

function getUsersWithFriend(objects, friendName) {
    return objects
      .filter((object) => object.friends.includes(friendName))
      .map((object) => object.name);
  };
    
console.log('task-8.1', getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log('task-8.2', getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



  
///////////////////////////////////////////////////////task-9///////////////////////////////////////////////////

function getNamesSortedByFriendsCount(objects) {
    return [...objects]
      .sort((a, b) => a.friends.length - b.friends.length)
      .map((object) => object.name);
  }
    
console.log('task-9', getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



  
///////////////////////////////////////////////////////task-10///////////////////////////////////////////////////

function getSortedUniqueSkills(objects) {
    return objects
      .reduce((total, object) => total.concat(object.skills), [])
      .filter((item, index, array) => index === array.indexOf(item))
      .sort();
  }
    console.log('task-10', getSortedUniqueSkills(users));
    // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]