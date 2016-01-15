var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'book/',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('book/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['book/**/*'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
