var gulp = require('gulp')
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    argv = require('yargs').argv,
    path = require('path');

gulp.task('default', function(){
    var capitalize = function(val){
      return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var className = argv.className;
    var tag = argv.tag;
    var parentPath = argv.parent || '';
    var destinationPath = path.join('app/components', parentPath, `${tag}-component`);

    return gulp
      .src('template/view/**/*')
      .pipe(template({
        className: capitalize(className),
        tag:tag
      }))
      .pipe(rename(function(path){
        path.basename = path.basename.replace('view', tag);
      }))
      .pipe(gulp.dest(destinationPath));
  }
);
