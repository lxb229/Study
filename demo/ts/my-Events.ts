import * as Events from 'events';
const EventEmitter = Events.EventEmitter;
const life = new EventEmitter();
//官方建议在同个事件最多10个监听器,
//但如果非要添加超过10个监听器也是可以的
life.setMaxListeners(3);

life.on('miss', (who) => {
    console.log('给' + who + '唱歌');
});
life.on('miss', (who) => {
    console.log('给' + who + '跳舞');
});
life.on('miss', (who) => {
    console.log('给' + who + '按摩');
});
//判断事件是否被监听过
console.log('是否监听miss2:' + life.emit('miss2', 'lee'));
console.log('是否监听miss:' + life.emit('miss', 'lee'));

