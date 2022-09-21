const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('gulp4-run-sequence')

//chama arquivos
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')


gulp.task('default', () => {
    if(util.env.production){
        sequence('deps', 'app')
    } else {
        sequence('deps', 'app', 'server')
    }
})
