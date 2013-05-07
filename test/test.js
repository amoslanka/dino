var assert = require('assert')
  , dino = require('../lib/dino');

exports.unit = function () {

  (function dino_drawBronto() {

    var saur = ''
      , bronto = dino.drawBronto();

    saur += '\n               __';
    saur += '\n              / _)';
    saur += '\n     _.----._/ /';
    saur += '\n    /         /';
    saur += '\n __/ (  | (  |';
    saur += '\n/__.-\'|_|--|_|\n';
    saur = saur.green;

    assert.strictEqual(bronto, saur,
      'Unexpected output.\n'.red +
      '\nExpected: \n' + saur +
      '\nReturned: \n' + bronto
    );

  }());

  console.log('All tests passed.'.green);
};