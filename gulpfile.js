// Import external dependecies
const {
  paths
} = require('./package.json');

// Import main dependecies
const gulp = require('gulp');

// Import work dependecies
const watch = require('gulp-watch');
const fonts = require('./gulp/fonts');
/*
 * If you need svg icons sprite use module "sprite"
 * Next step you need include js module "svgLoader"
 * And exclude _icons.scss in main.scss file
 * Else if you need icons font use module "icons"
 */
const icons = require('./gulp/sprite');
const images = require('./gulp/images');
const pug2html = require('./gulp/pug');
const minifyJS = require('./gulp/minify');
const favicon = require('./gulp/favicon');

// Watch all files: images, fonts, icons.
const _watch = () => {
  watch(
    paths.src + 'fonts/*.ttf',
    fonts
  );
  watch( 
    paths.src + '/icons/**/*.svg',
    icons
  );
  watch( 
    paths.src + '/img/**/*',
    images
  );
  watch( 
    paths.src + '/pug/**/*',
    pug2html
  );
  watch( 
    paths.dist + '/img/favicon/*',
    favicon
  );
};

// exports
module.exports = {
  fonts,
  icons,
  images,
  pug2html,
  favicon,
  build: gulp.parallel(
    fonts,
    icons,
    images,
    pug2html,
    favicon,
    minifyJS
  )
};
module.exports.default = gulp.parallel(
  fonts,
  icons,
  images,
  pug2html,
  favicon,
  _watch
);