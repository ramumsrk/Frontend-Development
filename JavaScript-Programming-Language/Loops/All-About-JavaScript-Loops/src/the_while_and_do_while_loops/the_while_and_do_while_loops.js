#! /opt/node-v21.6.2-linux-x64/bin/node

'use strict';

let firstQueue = [
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

let secondQueue = [];
// Same as above, but also log when array
// is empty
do {
  let itemInQueue = secondQueue.length ?? "Queue is empty";
  console.log(`Item in queue is: '${itemInQueue}'`)
} while (secondQueue.length != 0);
