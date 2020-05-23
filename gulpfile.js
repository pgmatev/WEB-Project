var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function (){
    return gulp.src('./sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('css', function() {
    gulp.src('./css/*.css')
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    }))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('run', gulp.parallel('sass', 'css'));

gulp.task('watch', function() {
    gulp.watch('./sass/*.sass', gulp.parallel('sass'));
    gulp.watch('./css/*.css', gulp.parallel('css'));
});

gulp.task('default', gulp.parallel('run', 'watch'));
