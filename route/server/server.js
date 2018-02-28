var http = require('http');

function start(router) {
    http.createServer(function (request, response) {
        router.init(request, response);
    }).listen(8080);
    console.log('Server 127.0.0.1:8080 starting');
}

exports.start = start;