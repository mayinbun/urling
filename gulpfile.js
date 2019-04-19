const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
	gulp.src('index.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest('dist'))
);
