'use strict';

const gulp       = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    cleanCSS     = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer([
            'last 10 versions'
            ], {
                cascade: true
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/scss/**/*.scss", gulp.parallel('styles'));
    gulp.watch("src/*.html");
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));