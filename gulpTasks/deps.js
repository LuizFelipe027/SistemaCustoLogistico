//Arquivo das dependencias: Angular, Jquery, Bootstrap, etc...

const gulp = require('gulp')

gulp.task('deps', gulp.series(depsJS))


    function depsJS() {
        return console.log('ok')
      }

//gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', () => {
    
})

gulp.task('deps.css', () => {
    
})

gulp.task('deps.fonts', () => {
    
})