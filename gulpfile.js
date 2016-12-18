var gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', function(){
  return gulp.src('./*pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
})
