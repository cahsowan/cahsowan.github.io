var gulp = require('gulp'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    templateCache = require('gulp-angular-templatecache');

var jsDir = [
        './assets/js/app.js',
        './assets/js/directives/*.js',
        './assets/js/controllers/*.js'
    ],
    cssDir = [
        './assets/css/*.css',
        '!./assets/css/*.min.css',
        '!./assets/css/bootstrap.css',
        '!./assets/css/bootstrap-theme.css',
        '!./assets/css/font-awesome.css'
    ],
    vendorDir = [
        './assets/js/vendor/angular/angular.js',
        './assets/js/vendor/angular/angular-route.js',
        './assets/js/vendor/angular/angular-sanitize.js',
        './assets/js/vendor/angular/ui-bootstrap-tpls-0.11.0.js',
        './assets/js/vendor/underscore/underscore.js'
    ],
    targetJsDir = './assets/js',
    targetCssDir = './assets/css';

gulp.task('angular_templates', function () {
    gulp.src('./views/**/*.html')
        .pipe(templateCache({module:'cahsowan'}))
        .pipe(gulp.dest(targetJsDir))
        .pipe(connect.reload());
});

gulp.task('jsvendor', function() {
    gulp.src(vendorDir)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(targetJsDir))
});

gulp.task('css', function () {
    return gulp.src(cssDir)
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS({'keepSpecialComments-*':0}))
        .pipe(gulp.dest(targetCssDir))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src(jsDir)
        .pipe(concat('all.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(targetJsDir))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        // root: './',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./**/*.html'], ['html', 'angular_templates']);
    gulp.watch([cssDir], ['css']);
    gulp.watch([jsDir], ['js'])
});

gulp.task('default', ['css', 'js', 'angular_templates', 'connect', 'watch']);