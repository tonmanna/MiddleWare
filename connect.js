var http = require('http');
var connect = require('connect');
var Q = require('Q');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function (req, res) {
      res.end('hello world\n');
  })
 .listen(3000);