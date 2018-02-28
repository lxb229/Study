
import * as http from 'http';

const app = http.createServer((req, res) => {
    res.end('Hello ts-nodejs');
}).listen(8080, () => {
    console.log('启动端口号为8080的服务器...');
});