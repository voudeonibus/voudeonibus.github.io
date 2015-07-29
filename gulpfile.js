// Require modules
var path = require('path');
var gulp = require('gulp');
var gif = require('gulp-if');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var neat = require('node-neat').includePaths;
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var argv = require('minimist')(process.argv.slice(1));

var dir_src = path.join(__dirname, '/src');
var dir_build = path.join(__dirname, 'src/build');

gulp.task('script', function() {
  gulp.src(path.join(dir_src, 'script/**/*.js'))
    .pipe(gif(argv.p || argv.production, uglify()))
    .pipe(gulp.dest(path.join(dir_build, '')))
    .pipe(reload({stream: true}));
});

gulp.task('script:watch', function() {
  gulp.watch(path.join(dir_src, 'script/**/*.js'), ['script']);
});

gulp.task('style', function () {
  gulp.src(path.join(dir_src, 'style/**/*.scss'))
    .pipe(sass({
      style: 'expanded',
      includePaths: neat
    }).on('error', sass.logError))
    .pipe(gif(argv.p || argv.production, cssmin()))
    .pipe(gulp.dest(path.join(dir_build, '')))
    .pipe(reload({stream: true}));
});

gulp.task('style:watch', function () {
  gulp.watch(path.join(dir_src, 'style/**/*.scss'), ['style']);
});

gulp.task('browser-sync', function() {
  var files = [
    dir_build + 'css/app.css',
    dir_build + 'js/app.min.js',
    dir_build + 'img/**/*.*',
    './*.html'
  ];

  browserSync.init(files, {
    proxy: 'localhost:8000',
    notify: false
  });
});

gulp.task('build', ['style', 'script']);
gulp.task('watch', ['build', 'style:watch', 'script:watch', 'browser-sync']);
gulp.task('default', ['watch']);
