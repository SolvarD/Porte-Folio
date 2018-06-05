var gulp = require('gulp');
var minify = require('gulp-concat');
var uglify = require('gulp-uglify');
var jsFiles = 'app/**/*.js',
    jsDest = 'dist';
gulp.task('start', function() {
  return gulp.src(jsFiles)
      .pipe(minify('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(jsDest));
});
