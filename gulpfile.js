const gulp = require('gulp'),
mocha = require('gulp-mocha'),
nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  gulp.start('start');
});

gulp.task('nodemon', (cb) => {
  let started = false;

  return nodemon({
    "script": "lib/*.js",
    "restartable": "rs",
    "colours": true,
    "watch": ["lib/*.js", "tests/*.js"],
    "stdin": true,
    "runOnChangeOnly": false,
    "verbose": false,
    "stdout": true
  })
    .on('start', ['test'], () => {
      if (!started) {
        started = true;
        return cb();
      }
    })
    .on('restart', ['test'], () => {
      console.log('restarting');
    });
});

gulp.task('test', function(){
  return gulp.src('tests')
    .pipe(mocha({reporter: 'spec'}))
    once('error', function() {
        process.exit(1);
    })
    .once('end', function() {
      process.exit();
    });
});

gulp.task('start', ['nodemon'], function() {});
