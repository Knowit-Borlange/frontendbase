const clean = require('../tools/clean');
const assemble = require('../tools/assemble');
const copy = require('../tools/copy');
const util = require('gulp-util');

module.exports = function (gulp, plugins) {
  return gulp.task('buildHTML', () => {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';

    util.log(util.colors.cyan(`Building HTML for environment ${process.env.NODE_ENV}`));
    return clean([process.env.BUILD_PATH + 'mockups'])
                  .then(assemble)
                  .then(copy)
  });
};