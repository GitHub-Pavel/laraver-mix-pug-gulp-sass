const mix = require('laravel-mix');
const sortCSSmq = require('sort-css-media-queries');

const path = require('path');
const {
  paths 
} = require('./package.json');

const urlArray = path.dirname(__filename).split(path.sep);
const parentDir = urlArray.pop(); // If you make a layout
// const parentDir = urlArray[urlArray.length-3]; // If you use wordpress

mix.js( 
  paths.src + '/js/main.js', 
  paths.dist + '/js' 
);

mix.sass(
  paths.src + '/scss/styles.scss',
  paths.dist + '/css',
  {},
  [
    require('css-mqpacker')({
      sort: sortCSSmq
    }),
    require('cssnano')({
      preset: [
        'default', 
        {
          discardCommnets: {
            removeAll: true
          }
        }
      ]
    })
  ]
).options({
  processCssUrls: false
});

mix.browserSync({
  proxy: parentDir,
  files: [
    paths.dist + '/css/styles.css',
    paths.dist + '/js/main.js',
    paths.dist + '/**/*.html',
    paths.dist + '/img/**/*',
    paths.dist + '/fonts/**/*'
  ]
});