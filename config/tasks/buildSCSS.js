const clean = require('../tools/clean');
const sass = require('../tools/sass');
const copy = require('../tools/copy');
const util = require('gulp-util');

module.exports = function (gulp, plugins) {
  return gulp.task('buildSCSS', () => {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';

    util.log(util.colors.cyan(`Building SCSS for environment ${process.env.NODE_ENV}`));
    return clean([process.env.BUILD_PATH + 'stylesheets'])
                  .then(sass)
                  .then(copy)
                  /*.then(() => {
                    runSequence(
                      'manifestfile'
                    );
                  });*/
  });
};