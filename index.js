'use strict';

var FS = require('file-system');
var Builder = require('./modules/builder');
var _root = '../../'; // to come back from ./node_modules/awesomicons/ to ./
var _src = _root + process.argv[2];
var _dest = _root + process.argv[3];
var _watch = process.argv[4];

try {
  // building icons
  Builder.start(_src, _dest);
  // watching icons
  if (typeof _watch !== 'undefined' && _watch === 'watch') {
    FS.watch(_src, function() {
      // build on change
      Builder.start(_src, _dest);
    });
    console.log('Watching...');
  }
} catch(e) {
  console.log(e);
}