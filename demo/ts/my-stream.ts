
/**
 * Stream 是一个抽象接口，
 * 对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）
 * Node.js，Stream 有四种流类型：
 *      Readable – 可读操作。
 *      Writable – 可写操作。
 *      Duplex – 可读可写操作.
 *      Transform – 操作被写入数据，然后读出结果
 * 
 * '所有' 的 Stream 对象都是 EventEmitter 的实例,常用的事件有：
 *      data – 当有数据可读时触发。
 *      end – 没有更多的数据可读时触发。
 *      error – 在接收和写入过程中发生错误时触发。
 *      finish – 所有数据已被写入到底层系统时触发。
 */
import * as fs from 'fs';
import * as path from 'path';

//创建可读流
let read_data = '';
let readerStream = fs.createReadStream('../res/input.txt');
//设置编码格式为 utf8
readerStream.setEncoding('UTF8');
//处理事件 -> data,end,error
readerStream.on('data', (chunk) => {
    read_data += chunk;
}).on('end', () => {
    console.log('读取完成，读取的内容是：' + read_data);
}).on('error', (error: Error) => {
    console.log(error.stack);
});

//创建可写流
let write_data = 'stream写入：lxb229@qq.com';
//写入路径
let writePath = '../lee/res/';
//如果路径不存在,就创建
if (!fs.existsSync(writePath)) {
    mymkdirSync(writePath);
}
let writerStream = fs.createWriteStream(writePath + 'log.txt');
//使用utf8的编码写入数据
writerStream.write(write_data, 'UTF8');
//标记文件末尾
writerStream.end();
//处理流事件 -> finish ,error
writerStream.on('finish', () => {
    console.log('写入完成');
}).on('error', (error: Error) => {
    console.log(error.stack);
});

/**
 * 递归创建目录 同步方法
 * @param {string} dirname 
 * @returns 
 */
function mymkdirSync(dirname: string) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mymkdirSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}
// 递归创建目录 异步方法  
function mkdirs(dirname: string, callback: any) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            callback();
        } else {
            // console.log(path.dirname(dirname));  
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
                console.log('在' + path.dirname(dirname) + '目录创建好' + dirname + '目录');
            });
        }
    });
} 
