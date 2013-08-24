var http = require('http');
var Q = require('Q');

console.log(foo()
.then(function () {
    return "bar";
}));

http.createServer(function (req, res) {
    for (var i = 0; i < 10; i++) {
        console.log("MyLoog" + i);
    }
    console.log("End Loop");


    Q.fcall(function ()
    {
        for (var i = 0; i < 10; i++) {
            setTimeout(console.log("MyLoog"+i), 10);
        }
        console.log("End Loop");
        setTimeout(console.log("1"), 1000);
    })
    .then(function () { setTimeout(console.log("2"), 500); })
    .then(function () { setTimeout(console.log("3"), 250); })
    .then(function () { setTimeout(console.log("4"), 125); })
    .then(function (value4) {
        // Do something with value4
        setTimeout(console.log(value4), 100);
    }, function (error) {
        // Handle any error from step1 through step4
        setTimeout(console.log("ERROR"), 100);
    })
    .done(function () { setTimeout(console.log("Done"), 1000); });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');