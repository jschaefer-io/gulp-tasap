# gulp-tasap

A gulp-plugin for the tsap.js template engine.

``` javascript
var gulp = require('gulp');
var tasap = require('gulp-tasap');
 
gulp.task('views', function buildHTML() {
	return gulp.src('./src/views/*.html')
		.pipe(tasap({
			// Options
		}))
		.pipe(gulp.dest('./dist/views'));
});
```

 See [tsap.js](https://github.com/jschaefer-io/gulp-tasap) for the options.