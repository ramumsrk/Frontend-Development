#! /opt/node-v21.6.2-linux-x64/bin/node

'use strict';

let firstArray = [
  "a",
  'b',
  "c",
];

for (let arrayElement of firstArray) {
  console.log(`Element in an array is: '${arrayElement}'`);
}

// Also, I need index of each element in
// an array
firstArray.forEach(
  (arrayElement, arrayElementIndex, firstArray) => console.log(`Element at index '${arrayElementIndex}' is '${arrayElement}'`)
);