
'use strict';


let totalTask = [];

const findBestEmployee = function (employees) {

  const entries = Object.entries(employees);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    totalTask.push(Number(value));
    console.log(Math.max(totalTask));
  }
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
