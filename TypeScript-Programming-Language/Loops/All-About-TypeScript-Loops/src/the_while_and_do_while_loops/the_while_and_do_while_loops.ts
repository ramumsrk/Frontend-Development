#! /opt/deno.com/v1.45.0/deno-x86_64-unknown-linux-gnu/deno

'use strict';

let firstQueue : string[] = [
  'a',
  'b',
  'c',
];

// Remove an item from the beginning of
// a queue and log it until the array is
// empty
while(firstQueue.length != 0) {
  console.log(`Item in the queue is: '${firstQueue.shift()}'`);
}

let secondQueue : any[] = [];
// Same as above, but also log when array
// is empty
do {
  let itemInQueue : any = secondQueue.length ?? "Queue is empty";
  console.log(`Item in queue is: '${itemInQueue}'`)
} while (secondQueue.length != 0);