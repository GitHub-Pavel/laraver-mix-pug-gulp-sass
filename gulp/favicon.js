// Import external dependecies
const {
  paths
} = require('../package.json');

// Import main dependecies
const gulp = require('gulp');

// Import working dependecies
const fs = require('fs');
const base64Img = require('base64-img');

const cb = () => {};

// Create favicon from gif
const favicon = () => {
  const faviconJSON = {base64: []};
  const faviconJSONPath = paths.dist+'/favicon.json';
  const path = paths.dist+'/img/favicon/';

  fs.readdir(path, (err, items) => {
    items.sort( function ( inA , inB ) {
      var result = 0;

      var a , b , pattern = /(\d+)/;
      var as = inA.split( pattern );
      var bs = inB.split( pattern );
      var index , count = as.length;
    
      if ( ( '' === as[0] ) === ( '' === bs[0] ) ) {
        if ( count > bs.length ) count = bs.length;

        for ( index = 0 ; index < count && 0 === result ; ++index ) {
          a = as[index]; b = bs[index];

          if ( index & 1 ) {
            result = a - b;
          } else {
            result = !( a < b ) ? ( a > b ) ? 1 : 0 : -1;
          }
        }
  
        if ( 0 === result ) result = as.length - bs.length;
      } else {
        result = !( inA < inB ) ? ( inA > inB ) ? 1 : 0 : -1;
      }
  
      return result;
    });
    items.map((item, index) => {
      base64Img.base64(path+item, (err, data) => {
        faviconJSON.base64 = [...faviconJSON.base64, data];
        fs.truncate( faviconJSONPath, 0, () => {
          fs.writeFile( faviconJSONPath, JSON.stringify(faviconJSON), cb);
        });
      });
    });
  });
};

module.exports = favicon;