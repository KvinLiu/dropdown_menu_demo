var gulp = require('gulp'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    reload  = browserSync.reload;

gulp.task('pug', function(){
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
})

gulp.task('browserSync', ['pug'], function(){
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false
  });
})

gulp.task('default',['pug', 'browserSync'], function(){
  gulp.watch('src/*.pug',[reload]);
})
