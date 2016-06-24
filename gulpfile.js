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
  console.log('Adding \n');
  return gulp.src('./git-test/*')
    .pipe(git.add({ args: ' -A' }));
});

gulp.task('commit', () => {
  console.log('Commiting \n');
  return gulp.src('./*')
    .pipe(git.commit('gulp commit'));
});

gulp.task('push', () => {
  console.log('Pushing \n');
  git.push('github', 'gulptask', (err) => {
    if (err) throw err;
  });
});

gulp.task('hello', () => {
  console.log('hello');
});

gulp.task('default', ['add', 'commit', 'push'], () => {
  console.log('Finishing push');
});

// aslkajsdlkjasdlkjasdasdasdkjhdsfkjh
