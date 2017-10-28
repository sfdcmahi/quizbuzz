const gulp=require('gulp');
const concat=require('gulp-concat');
const browserSync=require('browser-sync').create();
const venderscript=[
                    "./node_modules/angular/angular.js",
                    "./node_modules/angular-route/angular-route.js",

                ];
var devMode=false;
gulp.task('css',function(){
  gulp.src('./src/css/*.css')
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('vendorjs',function(){
  gulp.src(venderscript)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('js',function(){
  gulp.src( "./src/js/**/*.js")
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('html',function(){
  gulp.src('./src/templates/*.html')
        .pipe(gulp.dest('dist/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('index',function(){
  gulp.src('index.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images',function(){
  gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build',function(){
  gulp.start(['css','index','vendorjs','js','html','images']);
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist',
        }
    });
});

gulp.task('start', function() {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./src/css/**/*.css'], ['css']);
    gulp.watch(['./src/js/**/*.js'], ['js']);
    gulp.watch(['./src/templates/*.html'], ['html']);
    gulp.watch(['./src/images/*'], ['images']);
    gulp.watch(['index.html'], ['index']);
});
