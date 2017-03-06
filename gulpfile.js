'use strict';
var gulp = require('gulp');
var _  = require('lodash');
var fs = require('fs');
//var browserSync = require('browser-sync').create();

// Default task
gulp.task('default', []);

// Bootstrap task
gulp.task('bootstrap', function() {
  return gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
             .pipe(gulp.dest('vendor/bootstrap'));
});
