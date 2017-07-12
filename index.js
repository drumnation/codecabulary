var http = require('http')
var express = require('express')
var router = express.Router()

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end()
}).listen(process.env.PORT || 3000)

router.get('/', function (req, res) {
  res.send('hello world')
})
