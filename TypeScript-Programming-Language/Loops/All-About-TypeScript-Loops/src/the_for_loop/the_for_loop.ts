#! /opt/deno.com/v1.45.0/deno-x86_64-unknown-linux-gnu/deno

'use strict';

// Log numbers from 1 through 5
for (let counter : number = 1 ; counter <= 5 ; counter += 1) {
  console.log(`Counter is: '${counter}'`);
}

// Same as the previous for loop
// but as a _while_ loop
// Loop initialization expression
let counter : number = 1;
while (counter <= 5) {
  console.log(`Counter is: '${counter}'`);
  // Loop increment expression
  counter += 1;
}