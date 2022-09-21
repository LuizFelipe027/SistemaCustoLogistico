//Responsavel para startar o servidor 

const gulp = require('gulp')
//const watch = require('gulp-watch')


gulp.task('server', gulp.series(watch))


    function watch() {
        return console.log('ok')
      }

//monitora todos os arquivos da aplicacao e se preciso regenera-los
// gulp.task('watch', () => {

// })

// gulp.task('server', ['watch'], () => {
    
// })