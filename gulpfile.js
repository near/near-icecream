const gulp = require("gulp");
const nearUtils = require("near-shell/gulp-utils");

gulp.task("build:model", callback => {
  nearUtils.generateBindings("model.ts", "../out/model.near.ts", callback);
});

gulp.task("build:bindings", gulp.series("build:model", callback => {
  nearUtils.generateBindings("main.ts", "../out/main.near.ts", callback);
}));

gulp.task("build", gulp.series("build:bindings", callback => {
  nearUtils.compile("../out/main.near.ts", "../out/main.wasm", callback);
}));