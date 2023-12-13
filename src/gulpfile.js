const { src, dest, watch } = require('gulp')
const minifyJs = require("gulp-uglify")
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

const bundleJs = () => {
    return src('./js/**/*.js')
        .pipe(sourceMaps.init())
        .pipe(minifyJs())
        .pipe(concat('bundle.min.js'))
        .pipe(sourceMaps.write())
        .pipe(dest('../dist'))
}

const bundleCss = () => {
    return src('./styles/**/*.css')
        .pipe(sourceMaps.init())
        .pipe(minifyCss())
        .pipe(concat('styles.min.css'))
        .pipe(sourceMaps.write())
        .pipe(dest('../dist'));
};

const devWatch = () => {
    watch('./js/**/*.js', bundleJs);
    watch('./styles/**/*.css', bundleCss);
};

exports.bundleJs = bundleJs
exports.bundleCss = bundleCss
exports.watch = devWatch 