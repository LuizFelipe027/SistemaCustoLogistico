//Ler todo o código da aplicação

const gulp = require('gulp')


gulp.task('app', gulp.series(appHtml))


    function appHtml() {
        return console.log('ok')
      }

//gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

gulp.task('app.html', () => {

})

gulp.task('app.css', () => {
    
})

gulp.task('app.js', () => {
    
})

gulp.task('app.assets', () => {
    
})