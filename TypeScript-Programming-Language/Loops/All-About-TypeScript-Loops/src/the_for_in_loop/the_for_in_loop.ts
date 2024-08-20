#! /opt/deno.com/v1.45.0/deno-x86_64-unknown-linux-gnu/deno

'use strict';

// Object literal
let object_literal : {'a': number, 'b': number, 'c': number} = {
  'a': 1,
  'b': 2,
  'c': 3,
};

for (let key in object_literal) {
  console.log(`Element is: '${object_literal[key]}'`);
}