const gulp = require('gulp');
const browserSync = require('browser-sync').create();

browserSync.init({ server: '.' });

gulp.task('watch', function() {
  return gulp.watch('*.(html|css|js)', (done) => {
      browserSync.reload();
      done();
    })
});

gulp.task('server', gulp.series([
  'watch',
]));
