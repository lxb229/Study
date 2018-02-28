import * as querystring from 'querystring';

//将对象 序列化
let str = querystring.stringify({ name: 'lee', author: 'leexb', data: '' });
console.log(str);
//将字符 反序列化
console.log(querystring.parse(str));
//将字符 转义编码
let str2 = querystring.escape('我爱你');
console.log(str2);
//将编码 转义字符
console.log(querystring.unescape(str2));