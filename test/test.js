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


  (function dino_drawTRex() {

    var saur = ''
      , trex = dino.drawTRex();

    saur += '\n            .-=-==--==--.';
    saur += '\n       ..-=="  ,\'o`)      `.';
    saur += '\n     ,\'         `"\'         \\';
    saur += '\n    :  (                     `.__...._';
    saur += '\n    |                  )    /         `-=-.';
    saur += '\n    :       ,vv.-._   /    /               `---==-._';
    saur += '\n     \\/\\/\\/VV ^ d88`;\'    /                         `.';
    saur += '\n         ``  ^/d88P!\'    /             ,              `._';
    saur += '\n            ^/    !\'   ,.      ,      /                  "-,,__,,--\'""""-.';
    saur += '\n           ^/    !\'  ,\'  \\ . .(      (         _           )  ) ) ) ))_,-.\\';
    saur += '\n          ^(__ ,!\',"\'   ;:+.:%:a.     \\:.. . ,\'          )  )  ) ) ,"\'    \'';
    saur += '\n          \',,,\'\',\'     /o:::":%:%a.    \\:.:.:         .    )  ) _,\'';
    saur += '\n           """\'       ;\':::\'\' `+%%%a._  \\%:%|         ;.). _,-""';
    saur += '\n                  ,-=\'_.-\'      ``:%::)  )%:|        /:._,"';
    saur += '\n                 (/(/"           ," ,\'_,\'%%%:       (_,\'';
    saur += '\n                                (  (//(`.___;        \\';
    saur += '\n                                 \\     \\    `         `';
    saur += '\n                                  `.    `.   `.        :';
    saur += '\n                                    \\. . .\\    : . . . :';
    saur += '\n                                     \\. . .:    `.. . .:';
    saur += '\n                                      `..:.:\\     \\:...\\';
    saur += '\n                                       ;:.:.;      ::...:';
    saur += '\n                                       ):%::       :::::;';
    saur += '\n                                   __,::%:(        :::::';
    saur += '\n                                ,;:%%%%%%%:        ;:%::';
    saur += '\n                                  ;,--""-.`\\  ,=--\':%:%:\\';
    saur += '\n                                 /"       "| /-".:%%%%%%%\\';
    saur += '\n                                                 ;,-"\'`)%%)';
    saur += '\n                                                /"      "|';
    saur = saur.red;

    assert.strictEqual(trex, saur,
      'Unexpected output.\n'.red +
      '\nExpected: \n' + saur +
      '\nReturned: \n' + trex
    );

  }());

  console.log('All tests passed.'.green);
};