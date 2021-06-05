var http = require('http');
var url = require('url');
var fs = require('fs');
var operation = require('./calculator.js');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.pathname == "/calculate.js")
        operation.calculate(req, res, q.query)
    else
        fs.readFile(filename, function (err, data) {
            console.log(filename);
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200); // Content-Type not included
            res.write(data);
            return res.end();
        });
}).listen(8080);

