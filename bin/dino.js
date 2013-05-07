#!/usr/bin/env node
var options = process.argv.splice(2)
  , dino = require('../lib/dino')
  , test = require('../test/test');

if (options[0] === 'test') {
  console.log('running tests...');
  test.unit();
}

if (options[0] === 'saur' || options[0] === undefined) {
  console.log(dino.drawBronto());
}