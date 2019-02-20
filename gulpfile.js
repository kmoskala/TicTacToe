
var gulp = require('gulp')
  , minifyHtml = require("gulp-minify-html")
  , minifyCss = require("gulp-minify-css")
  , uglify = require("gulp-uglify")
  , sass = require("gulp-sass");

sass.compiler = require('node-sass');
// task minify html
// gulp.task('html', function () {
//   return gulp.src('*.html') // path to your files
//     .pipe(minifyHtml())
//     .pipe(gulp.dest(''));
// });


// task uglify js
gulp.task('js', function () {
 return gulp.src('js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('js.min'));
});
// task sass to css
gulp.task('sass', function () {
  return gulp.src('scss/*.scss') // path to your file
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./js/*.js', ['js']);
  //gulp.watch('./*.html', ['html']);
  // Other watchers
});
