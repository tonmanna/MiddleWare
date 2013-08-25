exports.index = function (req, res) {

    var body = 'Hello World';
    res.setHeader('Content-Type', 'text/html');
    //res.setHeader('Content-Length', body.length);

    res.render('index', { title: 'Express' },function(err, html)
    {
        console.log(html);
    });

    res.end("HELLO WORLD");
};

