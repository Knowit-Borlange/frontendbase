const runSequence = require('gulp4-run-sequence');
const server = require('../tools/server');

module.exports = function (gulp, plugins) {
  return gulp.task('develop', () => {
    process.env.NODE_ENV = 'development';
    process.env.WATCH = 'watch';

    return new Promise(function (resolve, reject) {
      runSequence(
        'buildAll',
        'watch'
      );

      server();

      resolve();
    });
  });
};
