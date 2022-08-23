const { src, dest, parallel } = require("gulp");
const replace = require("gulp-replace");

function html() {
  return src("dist/*.html")
    .pipe(replace('rel="stylesheet" href="', 'rel="stylesheet" href="css/'))
    .pipe(replace('<script src="', '<script src="js/'))
    .pipe(replace('<img src="', '<img src="images/'))
    .pipe(dest("build"));
}
function images() {
  return src("dist/*.{jpg,png,svg}").pipe(dest("build/images"));
}
function css() {
  return src("dist/*.css").pipe(dest("build/css"));
}
function js() {
  return src("dist/*.js").pipe(dest("build/js"));
}

exports.move = parallel(html, images, css, js);
