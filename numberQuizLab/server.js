var http = require('http');
var url = require('url');
var fs = require('fs');
var quiz = require('./numberQuiz.js');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.pathname == "/numberQuiz.js")
        quiz.data(req, res, q.query);
    else
        fs.readFile("./numberQuiz.html", function (err, data) {
            //console.log(filename);
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                console.log("here!")
                return res.end("404 Not Found");
            }
            res.writeHead(200); // Content-Type not included
            res.write(data);
            return res.end();
        });
}).listen(8080);

