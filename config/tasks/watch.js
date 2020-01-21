module.exports = function (gulp, plugins) {
  return gulp.task('watch', () => {
    return new Promise(function(resolve, reject) {
      gulp.watch(['*.js', 'app/**/*.js'], gulp.series('buildJS'));
      gulp.watch(['*.html', 'app/**/*.html'], gulp.series('buildHTML'));
      gulp.watch(['app/**/*.scss'], gulp.series('buildSCSS'));
      
      resolve();
    });
    
  });
};
