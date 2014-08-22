var jshint = require('gulp-jshint'),
    path = require('path');

module.exports = function(gulp) {
    gulp.task('run-validation', function() {
        gulp.src(path.resolve(__dirname, '../src/**/*.js'))
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    });
};