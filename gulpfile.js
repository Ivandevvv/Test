var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    browserSync = require('browser-sync').create(),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    cache       = require('gulp-cache');

gulp.task('sass', function sas(){
    return gulp.src('app/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function browserSync() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});

gulp.task('watch', function watch() {

    browserSync.init({
        server: "./app",
        browser: "chrome"
    });

    gulp.watch('app/sass/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});


gulp.task('clean', function clean() {
    return del.sync('dist');
});

gulp.task('img', function img() {
    return gulp.src('app/img/*') 
        .pipe(cache(imagemin({ 
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['clean', 'img', 'sass'], function build() {

    var buildCss = gulp.src([ 
        'app/css/*.css',
        'app/css/libs.min.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildJs = gulp.src('app/js/*') 
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') 
    .pipe(gulp.dest('dist'));

    var buildFonts = gulp.src('app/fonts/**')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clear', function clear() {
    return cache.clearAll();
})

gulp.task('default', ['watch']);
