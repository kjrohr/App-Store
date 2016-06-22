const gulp = require('gulp');

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

gulp.task('hello', () => {
  console.log('hello');
});

gulp.task('default', ['hello'], () => {
  console.log('default');
});
