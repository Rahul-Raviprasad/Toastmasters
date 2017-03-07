'use strict';
var gulp = require('gulp');
// var _  = require('lodash');
// var fs = require('fs');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');

// Default task
gulp.task('default', []);

// Bootstrap task
gulp.task('bootstrap', function() {
  return gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
             .pipe(gulp.dest('vendor/bootstrap'));
});

//clean
gulp.task('clean', function() {
  return gulp.src('js/main.min.js')
             .pipe(clean());
});

//minify css
gulp.task('minify-css', function() {
  return gulp.src('css/main.css')
             .pipe(cleanCSS({compatibility: 'ie8'}))
             .pipe(rename({suffix: '.min'}))
             .pipe(gulp.dest('css'))
             .pipe(browserSync.reload({
               stream: true
             }));
});

//minify-js
gulp.task('minify-js', function() {
  return gulp.src(['js/**/*.js', '!**/*.spec.js'])
             .pipe(concat('main.js'))
             //.pipe(uglify())
             .pipe(rename({suffix: '.min'}))
             .pipe(gulp.dest('js'))
             .pipe(browserSync.reload({
               stream: true
             }));
});

// browser sync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    }
  });
});

// dev task
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('css/*.css', ['minify-css']);
  gulp.watch('js/**/*.js', ['clean', 'minify-js']);
  gulp.watch('*.html', browserSync.reload);
});
