'use strict';
var gulp = require('gulp');
// var _  = require('lodash');
// var fs = require('fs');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

// Default task
gulp.task('default', []);

// Bootstrap task
gulp.task('bootstrap', function() {
  return gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
             .pipe(gulp.dest('vendor/bootstrap'));
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
  gulp.watch('*.html', browserSync.reload);
});
