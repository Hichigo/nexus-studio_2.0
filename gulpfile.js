var gulp = require('gulp'),
		less = require('gulp-less'),
		concat = require('gulp-concat'),
		minifyCSS = require('gulp-minify-css'),
		csscomb = require('gulp-csscomb'),
		autoprefixer = require('gulp-autoprefixer'),
		notify = require('gulp-notify'),
		ngmin = require('gulp-ngmin'),
		min = require('gulp-minify');;

gulp.task('less', function() {
	gulp.src('dev/less/*.less')
		.pipe(concat('style.min.less'))
		.pipe(less())
		.pipe(csscomb())
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(gulp.dest('release/css/'))
		.pipe(notify('less done!'));
});

gulp.task('html', function() {
	gulp.src('dev/tpl/*.html')
		.pipe(gulp.dest('release/tpl/'))
});

gulp.task('ngmin', function () {
   gulp.src('dev/js/*.js')
				.pipe(concat('all.min.js'))
        .pipe(ngmin())
				.pipe(min())
        .pipe(gulp.dest('release/js/'))
				.pipe(notify("js done!"));
});

gulp.task('watch', function () {
	gulp.watch('dev/tpl/*.html', ['html']);
	gulp.watch('dev/less/*.less', ['less']);
	gulp.watch('dev/js/*.js', ['ngmin']);
});

gulp.task('default', ['html','less','ngmin', 'watch'])