var gulp = require('gulp'),
    qunit = require("gulp-qunit"),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss')
    SRC = 'lib/underscore.string.js',
    DEST = 'app/public',
    MIN_FILE = 'main.angular.min.js',
    ANGULAR_FILES = ['app/app.js', 'app/routes.js', 'app/components/*/*/*.js', 'app/components/*/*.js', 'app/factoryDeclaration.js'];
    JS_FILES = []
    CSS_FILES = ['app/css/style.css' ]
    var concat = require('gulp-concat');


gulp.task('buildAngular', function() {
    return gulp.src(ANGULAR_FILES)
        .pipe(uglify({mangle: false}))
        .pipe(concat(MIN_FILE))
        .pipe(gulp.dest(DEST));
});

gulp.task('buildJS', function() {
    return gulp.src(JS_FILES)
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(DEST));
});

gulp.task('buildCSS', function() {
    return gulp.src(CSS_FILES)
        .pipe(uglifycss())
        .pipe(gulp.dest(DEST));
});
