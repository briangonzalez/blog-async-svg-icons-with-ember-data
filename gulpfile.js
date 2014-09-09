var gulp    = require('gulp');
var fc2json = require('gulp-file-contents-to-json');

gulp.task('create-icon-sprite', function() {
  gulp.src('icons/**/*.svg')
      .pipe(fc2json('icon-sprite.json'))
      .pipe(gulp.dest('./dist/'));
});
