const gulp = require("gulp");
const data = require("gulp-data");
const nunjucksRenderer = require("gulp-nunjucks-render");
const templateData = require("./src/data/index");

gulp.task("nunjucks", function () {
  return gulp
    .src("src/templates/*.njk")
    .pipe(
      data(function () {
        return templateData;
      })
    )
    .pipe(
      nunjucksRenderer({
        path: "src/templates",
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("nunjucks-watch", function () {
  gulp.watch("src/templates/**/*.njk", gulp.parallel(["nunjucks"]));
});
