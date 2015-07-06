var gulp = require("gulp"),
	sass = require("gulp-sass"),
	concat = require("gulp-concat"),
	connect = require("gulp-connect"),
	mainBowerFiles = require('main-bower-files');
 
gulp.task('lib', function() {
    return gulp.src(mainBowerFiles())
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('assets/js'))
});

gulp.task('scripts', function() {
    return gulp.src('source/js/*')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/js'))
});


gulp.task('sass',function(){
	return gulp.src('source/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'))
		.pipe(connect.reload());
});

gulp.task('watch',function() {
    gulp.watch('source/scss/**/*.scss',['sass']);
    gulp.watch('bower_components/*',['lib']);
    gulp.watch('source/js/*',['scripts']);
});


gulp.task('connect', function() {
  connect.server({
    port: 3000,
    livereload: true
  });
});

gulp.task('default', ['lib', 'sass', 'watch','connect','scripts']);