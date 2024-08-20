#! /opt/node-v21.6.2-linux-x64/bin/node

'use strict';

let object_literal = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
    yield "c";
  },
};

for (let element of object_literal) {
  console.log(`Element is: '${element}'`);
}