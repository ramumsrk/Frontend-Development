#! /opt/deno.com/v1.45.0/deno-x86_64-unknown-linux-gnu/deno

'use strict';

let firstArray : string[] = [
  'a',
  'b',
  'c',
];

for (let character of firstArray) {
  console.log(`Element in array is: '${character}'`);
}