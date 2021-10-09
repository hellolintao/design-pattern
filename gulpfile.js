var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

var task = function() {
	return tsProject.src()
		.pipe(tsProject())
		.js.pipe(gulp.dest('dist'));
};

gulp.task('default', task);

gulp.watch('src/**/*.ts', { events: 'all' }, task);