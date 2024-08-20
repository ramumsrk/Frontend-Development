#! /opt/node-v21.6.2-linux-x64/bin/node

'use strict';

let firstArray = [
  'a',
  'b',
  'c',
];
for (let character of firstArray) {
  console.log(`Element in array is: '${character}'`);
}