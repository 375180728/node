var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename');

gulp.task('taskES6', function(){
    gulp.src('build/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename({suffix: 'build_es6'}))
        .pipe(gulp.dest('build/build_ES6'));
});
gulp.task('gulpfile', function(){
    gulp.watch('build/js/*.js', ['taskES6']);
});