exports.index = function (req, res) {

    var body = 'Hello World';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', body.length);
    setTimeout(function () {
        res.end("HELLO WORLD");

    }, 5000);
    //res.render('index', { title: 'Express' });
};
