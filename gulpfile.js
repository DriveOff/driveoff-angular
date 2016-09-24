var gulp = require('gulp'),
    qunit = require("gulp-qunit"),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss')
    SRC = 'lib/underscore.string.js',
    DEST = 'app/public',
    MIN_FILE = 'agstock.angular.min.js',
    ANGULAR_FILES = ['app/app.js', 'app/routes.js', 'app/components/*/*.js', 'app/shared/*/*.js', 'app/factoryDeclaration.js'];
    JS_FILES = ['app/js/jquery.min.js', 'app/js/jquery-migrate.min.js', 'app/bootstrap/js/bootstrap.min.js', 'app/js/jquery.sticky.js', 'app/js/scroll.js', 'app/js/custom.js']
    CSS_FILES = ['app/css/style.css', 'app/css/rev-style.css', 'app/cubeportfolio/css/cubeportfolio.min.css' ]
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
        .pipe(concat('jquery.custom.min.js'))
        .pipe(gulp.dest(DEST));
});

gulp.task('buildCSS', function() {
    return gulp.src(CSS_FILES)
        .pipe(uglifycss())
        .pipe(concat('bootstrap.custom.min.css'))
        .pipe(gulp.dest(DEST));
});