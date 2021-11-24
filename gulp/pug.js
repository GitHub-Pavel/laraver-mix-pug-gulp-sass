// Import external dependecies
const {
  paths
} = require('../package.json');
const config = require('config');

// Import main dependecies
const gulp = require('gulp');

// Import working dependecies
const pug = require('gulp-pug');

// Make html from pug
const pug2html = () => {
  return gulp.src(paths.src + '/pug/pages/*.pug')
    .pipe(pug({
      basedir: paths.src + '/pug',
      pretty: true,
      locals: config.get('pug')
    }))
    .pipe(gulp.dest(paths.dist));
};

module.exports = pug2html;