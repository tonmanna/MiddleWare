var http = require('http');
var FS = require('fs');
var Q = require('Q');

function getconnection(conectionstring) {
    return Q.fcall(function () {
        var data="Fake";
        var deferred = Q.defer();
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
        return "Table";
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