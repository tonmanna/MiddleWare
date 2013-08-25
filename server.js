var http = require('http');
var Q = require('Q');

function getconnection(conectionstring) {
    return Q.fcall(function () {
        return "Connection";
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