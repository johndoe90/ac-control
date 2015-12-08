var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('serve', shell.task([
    'live-server --open=src'
]));

gulp.task('default', ['serve']);