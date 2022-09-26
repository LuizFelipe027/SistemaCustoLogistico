const gulp = require('gulp')
const sequence = require('gulp4-run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default',()=> {
  sequence('deps','app',(process.env.NODE_ENV === 'development') ? 'debug' : 'server')
})
