const runSequence = require('gulp4-run-sequence');

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