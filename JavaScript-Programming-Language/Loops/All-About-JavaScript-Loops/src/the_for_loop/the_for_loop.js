#! /opt/node-v21.6.2-linux-x64/bin/node

'use strict';

// Log numbers from 1 through 5
for (let number = 1 ; number <= 5 ; number += 1) {
  console.log(`Number is: '${number}'`);
}

// Same this as a _while_ loop
// Loop initialization expression
let number = 1;
while (number <= 5) {
  console.log(`Number is: '${number}'`);
  // Loop increment expression
  number += 1;
}