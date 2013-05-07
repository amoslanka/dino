var colors = require('colors');

exports.drawBronto = function () {
  var dino = '';
  dino += '\n               __';
  dino += '\n              / _)';
  dino += '\n     _.----._/ /';
  dino += '\n    /         /';
  dino += '\n __/ (  | (  |';
  dino += '\n/__.-\'|_|--|_|\n';
  return dino.green;
};