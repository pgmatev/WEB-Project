var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function (){
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('css', function() {
    gulp.src('./css/*.css')
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(gulp.dest('./styles'));
});

gulp.task('run', gulp.parallel('sass', 'css'));

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', gulp.parallel('sass'));
    gulp.watch('./css/*.css', gulp.parallel('css'));
});

gulp.task('default', gulp.parallel('run', 'watch'));
