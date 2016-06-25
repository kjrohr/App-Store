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

// sdfsdfasd

gulp.task('add', () => {
  console.log('Adding \n');
  return gulp.src('./git-test/*')
    .pipe(git.add({ args: ' -A' }));
});

gulp.task('commit', ['add'], () => {
  console.log('Commiting \n');
  return gulp.src('./*')
    .pipe(git.commit('gulp commit'));
});

gulp.task('tag', ['commit'], () => {
  console.log('tagging \n');
  git.tag('v1.9.7', 'Version message', (err) => {
    if (err) throw err;
  });
});

gulp.task('push', ['tag'], () => {
  console.log('Pushing \n');
  git.push('github', 'gulptask', (err) => {
    if (err) throw err;
  });
});

gulp.task('push-tag', ['push'], () => {
  console.log('Pushing \n');
  git.push('github', 'gulptask', { args: ' --tags' }, (err) => {
    if (err) throw err;
  });
});

gulp.task('hello', () => {
  console.log('hello');
});

gulp.task('default', ['add', 'commit', 'tag', 'push', 'push-tag'], () => {
  console.log('Finishing push test blah');
});
