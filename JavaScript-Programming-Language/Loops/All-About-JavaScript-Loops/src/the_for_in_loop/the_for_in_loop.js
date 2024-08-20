#! /opt/node-v21.6.2-linux-x64/bin/node

'use strict';

// Object literal
let object_literal = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in object_literal) {
  console.log(`Key is: '${key}' and value is: '${object_literal[key]}'`)
}