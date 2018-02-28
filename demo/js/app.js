"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const app = http.createServer((req, res) => {
    res.end('Hello ts-nodejs');
}).listen(8080, () => {
    console.log('启动端口号为8080的服务器...');
});
//# sourceMappingURL=app.js.map