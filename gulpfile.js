var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
gulp.task('minSass', function() {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
})
gulp.task('minCss', function() {
    return gulp.src('./css/*.css')
        .pipe(concat('all.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./css/'))
})
gulp.task('watch', function() {
    gulp.watch('./scss/*.scss', gulp.series('minSass'))
})