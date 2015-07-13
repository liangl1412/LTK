var gulp = require("gulp"),
	sass = require("gulp-sass"),
	connect = require("gulp-connect"),
    webpack = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('app/javascripts/src/app.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('app/javascripts/'));
});


gulp.task('sass',function(){
	return gulp.src('app/stylesheets/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/stylesheets/'))
		.pipe(connect.reload());
});

gulp.task('watch',function() {
    gulp.watch('app/stylesheets/scss/**/*.scss',['sass']);
    gulp.watch('app/javascripts/src/**/*.jsx',['webpack']);
    
});


gulp.task('connect', function() {
  connect.server({
    root:"./app",
    port: 3000,
    livereload: true
  });
});

gulp.task('default', ['sass', 'watch','connect','webpack']);