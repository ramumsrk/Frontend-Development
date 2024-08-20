#! /opt/deno.com/v1.45.0/deno-x86_64-unknown-linux-gnu/deno

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