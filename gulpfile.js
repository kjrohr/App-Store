const gulp = require('gulp');
const git = require('gulp-git');
gulp.task('bump', () => {
  // Get Yargs from the command line
  // Get current version from pkg.json
  // increase version number with utility tool
  // save new version back to pkg.json
  // git add
  // git commit
  // git tag
  // git push to release

});

gulp.task('add', () => {
  console.log('eslint does not like just a return');
  return gulp.src('./git-test/*')
    .pipe(git.add({ args: ' -A' }));
});

gulp.task('commit', () => {
  console.log('eslint does not like just a return');
  return gulp.src('./*')
    .pipe(git.commit('gulp commit'));
});

gulp.task('push', () => {
  git.push('github', 'gulptask', (err) => {
    if (err) throw err;
  });
});

gulp.task('hello', () => {
  console.log('hello');
});

gulp.task('default', ['add', 'commit', 'push'], () => {
  console.log('default');
});

// aslkajsdlkjasdlkj
