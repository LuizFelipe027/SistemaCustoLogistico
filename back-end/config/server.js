const port = 5000
const routes = require('./routes')
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(express.urlencoded({limit: '50mb', extended: true}))
server.use(express.json({limit: '50mb'}))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(routes)

server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server