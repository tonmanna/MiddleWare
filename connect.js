var http = require('http');
var Connect = require('connect');
var route = require("./routes/index");
var Q = require('Q');


module.exports = Connect.createServer(
    require("./routes/server-js")(),
    require("./routes/log-js")(),
    Connect.logger(), // Log responses to the terminal using Common Log Format.
    Connect.responseTime(), // Add a special header with timing information.  
    Connect.compress(),
    Connect.limit('10mb'),
    Connect.staticCache()
);

var app = Connect()
  .use(Connect.logger('dev'))
  .use(Connect.static('public'))
  .use("/ton",function(req,res){     
     res.simpleBody(200, "hello world 124");
     route.index(req, res);
  })
  .use(function (req, res) {
      res.end('hello world\n');
  })
.listen(3000);