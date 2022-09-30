const gulp = require('gulp')
const terser = require('gulp-terser')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', gulp.series(depsJs,depsCss,depsFonts))

function depsJs() {
  return gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
    'node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js',
    'node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
    'node_modules/admin-lte/bower_components/select2/dist/js/select2.min.js',
    'node_modules/admin-lte/dist/js/adminlte.min.js',
    'node_modules/angular-input-masks/releases/angular-input-masks-standalone.min.js',
    'node_modules/chart.js/dist/Chart.min.js',
    'node_modules/angular-chart.js/dist/angular-chart.min.js',
    'node_modules/xlsx/dist/xlsx.full.min.js'
  ])
  .pipe(terser())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'))
}

function depsCss() {
  return gulp.src([
    'node_modules/angular-toastr/dist/angular-toastr.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/admin-lte/bower_components/select2/dist/css/select2.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.min.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    'node_modules/chart.js/dist/Chart.min.css'
  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))
}

function depsFonts() {
  return gulp.src([
    'node_modules/font-awesome/fonts/*.*',
    'node_modules/admin-lte/bower_components/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))
}
