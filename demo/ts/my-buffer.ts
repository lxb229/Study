
console.log('-----buffer-----');
/**
 * 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
 * Buffer 库为 Node.js 带来了一种存储原始数据的方法，
 * 可以让 Node.js 处理二进制数据，每当需要在 Node.js 中
 * 处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
 * 原始数据存储在 Buffer 类的实例中。
 * 一个 Buffer 类似于一个整数数组，
 * 但它对应于 V8 堆内存之外的一块原始内存。
 */
console.log('------数组形式------');
let buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString());
console.log(buf.toJSON());

console.log('------数组形式------');
console.log('\r\n');
console.log('------字符形式------');

let url = new Buffer('lxb229@qq.com');
console.log(url.toString());
console.log(url.toJSON());
console.log('------字符形式------');
console.log('\r\n');

console.log('------缓冲区合并------');
let nick = new Buffer('lee->');
let name_url = Buffer.concat([nick, url]);
console.log('name_url:' + name_url.toString());
console.log('------缓冲区合并------');
console.log('\r\n');

console.log('------缓冲区比较------');
let buf_a = new Buffer('lee');
let buf_b = new Buffer('lee');
let result = buf_a.compare(buf_b);
if (result < 0) {
    console.log(buf_a + '在' + buf_b + '之前');
} else if (result === 0) {
    console.log(buf_a + '与' + buf_b + '相同');
} else {
    console.log(buf_a + '在' + buf_b + '之后');
}
console.log('------缓冲区比较------');
console.log('\r\n');

console.log('------缓冲区拷贝------');
let buf_copy = new Buffer(5);
let buf_copy_target = new Buffer('leeleeleelee');
//要拷贝的目标.copy(当前的buf);
buf_copy_target.copy(buf_copy);
console.log('buf_copy_to content:' + buf_copy.toString());
console.log('------缓冲区拷贝------');
console.log('\r\n');

console.log('------缓冲区裁剪------');
//裁剪后得到一个新的buffer,不改变原有的buffer
let buf_slice_to = buf_copy_target.slice(0, 3);
console.log('buf_slice_to content:' + buf_slice_to.toString());
console.log('------缓冲区裁剪------');
console.log('\r\n');

console.log('------缓冲区长度------');
console.log('buffer length:' + buf_copy_target.length);
console.log('-----buffer-----');