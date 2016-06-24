const gulp = require('gulp');
const git = require('gulp-git');

// const packageJSON = require('./package.json');

gulp.task('bump', () => {
  return gulp.src('./*').pipe(git.add({ args: ' -f' })).pipe(git.commit('gulp commit'))
  .pipe(git.push('github', 'release'));
});

gulp.task('hello', () => {
  console.log('hello');
});

gulp.task('default', ['bump'], () => {
  console.log('default');
});
