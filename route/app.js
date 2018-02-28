var server = require('./server/server');
var router = require('./route/route');

router.setRootPath(__dirname);

//req为request的缩写，意思为（浏览器）请求
//res为response的缩写，意思为（服务器）响应
router.get('/', function (req, res) {
    router.sendFile(res, "/view/index.html");
});//处理/的get请求

router.get('/index', function (req, res) {
    router.sendFile(res, "/view/index.html");
});//处理/的get请求

server.start(router);