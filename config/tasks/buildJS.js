const clean = require('../tools/clean');
const js = require('../tools/js');
const copy = require('../tools/copy');
const util = require('gulp-util');

module.exports = function (gulp, plugins) {
  return gulp.task('buildJS', () => {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';

    util.log(util.colors.cyan(`Building JS for environment ${process.env.NODE_ENV}`));
    return clean([process.env.BUILD_PATH + 'js'])
                  .then(js)
                  .then(copy)
  });
};
