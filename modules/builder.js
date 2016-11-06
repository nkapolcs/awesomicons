'use strict';

var fs = require('file-system');

module.exports = {
  /**
   * Builder
   * ----------------------------------------------------------
   * @param   {string}   src    The path of SVG icons directory
   * @param   {string}   dest   The path of SCSS file to write
   */
  start: function(src, dest) {
    try {
      // looping through icons directory
      fs.readdir(src, function (e, files) {
        if (files) {
          // pushing SVGs' content in a SCSS map
          var collection = '$awesomicons: (\n';
          files.forEach(function (filename) {
            if (filename.indexOf('.svg') > -1) {
              var svg = fs.readFileSync(src + '/' + filename, 'utf8');
              svg = encodeURI(svg);
              svg = svg.replace(/%7B%7B__AI-COLOR(-[0-9]+)?__%7D%7D/g, '{{__AI-COLOR$1__}}');
              collection += '\t\'' + filename.replace(/\.svg/g, '') + '\': \'' + svg + '\',\n';
            }
          });
          collection += ');\n';
          // writing the SCSS file
          fs.writeFileSync(dest, collection, 'utf8');
        } else {
          console.log('Sorry, icons directory is empty!');
        }
      });
    } catch(e) {
      console.log(e);
    }
  }
};
