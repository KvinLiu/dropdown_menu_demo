var gulp = require('gulp'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    reload  = browserSync.reload;

gulp.task('pug', function(){
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
})

gulp.task('sass', function(){
  return gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('browserSync', ['pug'], function(){
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false
  });
})

gulp.task('default',['pug', 'sass', 'browserSync'], function(){
  gulp.watch(['src/*.pug', 'src/sass/*.sass'],[reload]);
})
