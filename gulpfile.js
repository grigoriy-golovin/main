"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var webp = require("gulp-webp");
var del = require("del");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
const terser = require('gulp-terser')


gulp.task("copy", function () {
  return gulp
    .src(["source/fonts/**", "source/*.ico"], {
      base: "source",
    })
    .pipe(gulp.dest("build"));
});

gulp.task("del", function () {
  return del("build");
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("html", function () {
  return gulp.src("source/*.html").pipe(gulp.dest("build"));
});

gulp.task("css", function () {
  return gulp
    .src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

 gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemap.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(terser())
    .pipe(sourcemap.write())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("build/js"))
});

gulp.task("images", function () {
  return gulp
    .src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"));
});


gulp.task("webp", function () {
  return gulp
    .src("source/img/**/*.{jpg,png}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch("source/less/**/*.less", gulp.series("css", "refresh"));
  gulp.watch("source/img/*.{png,jpg}", gulp.series("images", "webp", "refresh"));
  gulp.watch("source/img/*.svg", gulp.series("images", "refresh"));
  gulp
    .watch("source/*.html", gulp.series("html", "refresh"))
    .on("change", server.reload);
  gulp
    .watch("source/js/*.js", gulp.series("js", "refresh"))
    .on("change", server.reload);
});

gulp.task("build", gulp.series("del", "css", "images", "webp", "html", "js", "copy"));

gulp.task("start", gulp.series("build", "server"));





