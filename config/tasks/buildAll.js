const clean = require('../tools/clean');
const eslint = require('../tools/eslint');
const js = require('../tools/js');
const sass = require('../tools/sass');
const assemble = require('../tools/assemble');
const copy = require('../tools/copy');
const server = require('../tools/server');
const util = require('gulp-util');
const runSequence = require('gulp4-run-sequence');
const manifestfile = require('../tasks/manifestfile');

module.exports = function (gulp, plugins) {
  return gulp.task('buildAll', () => {
    return new Promise(function(resolve, reject) {
      runSequence(
        'buildHTML',
        'buildJS',
        'buildSCSS'
      );
      resolve();
    });
    
  });
};