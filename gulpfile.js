'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    del = require('del');

let options = {
    sass_path: __dirname + '/sources/sass/',
    css_path: __dirname + '/css/'
};

let scssFiles = [
    options.sass_path + '**/*.scss',
    '!' + options.sass_path + '**/_*.scss',
];

gulp.task('clean:css', () => del([
        options.css_path + '**/*.css',
        options.css_path + '**/*.map'
    ], {force: true})
);

gulp.task('sass', gulp.series('clean:css', () => gulp.src(scssFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({
        noCache: true,
        outputStyle: 'develop',
        sourceMap: true,
        includePaths: [
            __dirname + '/node_modules/normalize-scss/sass'
        ]
    }))
    .pipe(autoprefixer())
    .pipe(clean_css({}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(options.css_path))
));

gulp.task('default', gulp.series('sass'));
