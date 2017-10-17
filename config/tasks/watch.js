module.exports = function (gulp, plugins) {
  return gulp.task('watch', () => {
      gulp.watch(['*.html', 'app/**/*.html'], ['build-html']);
      gulp.watch(['app/**/*.scss'], ['build-sass']);
      gulp.watch([process.env.MOCK_IMAGES + '**/*',process.env.MOCK_FONTS + '**/*'], ['copy-assets']);
  });
};
