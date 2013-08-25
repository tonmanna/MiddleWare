var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var http = require('http');
var FS = require('fs');
var Q = require('Q');

function getconnection(conectionstring) {
    return Q.fcall(function () {
        var data="Fake";
        var deferred = Q.defer(); // ใชัจัการกับ async
        FS.readFile("C:\\foo.txt", "utf-8", function (error, text) {
            data = "OK";
            if (error) {
                deferred.reject(new Error(error));
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    });
}
function getCon(model) {
    return Q.fcall(function () {
        var data = "Fake";
        var deferred = Q.defer(); // ใชัจัการกับ async
        console.log("wait 2 sec");
        setTimeout(function () {
                data = "Table";
                deferred.resolve(data);
        }, 2000);
        return deferred.promise;
    });
}

function getData(Table) {
    return Q.fcall(function () {
        return "Data";
    });
}


getconnection("Connectionstring")
.then(getCon)
.then(getData)
.then(function(value){
    console.log(value);
})
.catch(function (error) {
    // Handle any error from all above steps
    console.log("ERROR");
})
.done();

/*
return Q.fcall(function () {
    return 10;
});
return Q.fcall(function () {
    throw new Error("Can't do it");
});
*/


var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.compress());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});