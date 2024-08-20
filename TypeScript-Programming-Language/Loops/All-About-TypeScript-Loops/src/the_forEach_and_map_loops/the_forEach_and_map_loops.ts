#! /opt/deno.com/v1.45.0/deno-x86_64-unknown-linux-gnu/deno

'use strict';

let firstArray : string[] = [
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
  (arrayElement: string, arrayElementIndex: number, firstArray: string[]) => console.log(`Element at index '${arrayElementIndex}' is '${arrayElement}'`)
);