const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

const tailwind = () => {
    return gulp.src('gulp/tailwind.css')
        .pipe(postcss([
            tailwindcss(),
            autoprefixer()
        ]))
        .pipe(gulp.dest('public'));
};
exports.tailwind = tailwind;

const optimizeCss = () => {
    return gulp.src('public/tailwind.css')
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(gulp.dest('public'));
};
exports.optimizeCss = optimizeCss;

const dev = gulp.series(
    tailwind,
);
exports.dev = dev;

const prod = gulp.series(
    dev,
    optimizeCss,
);
exports.prod = prod;

exports.default = dev;
