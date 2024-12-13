const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function Styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputstyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
    }

    function images(){
        return gulp.src('./src/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./dist/images'))
        }

    exports.default = gulp.parallel(Styles, images);