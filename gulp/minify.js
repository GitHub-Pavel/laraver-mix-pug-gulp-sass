// Import external dependecies
const {
  paths
} = require('../package.json');

// Import main dependecies
const gulp = require('gulp');

// Import working dependecies
const uglify = require('gulp-uglify');

// Minify js
const pug2html = () => {
  return gulp.src(paths.dist + '/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + '/js'));
};

module.exports = pug2html;