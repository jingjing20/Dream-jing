console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// 按照规定 能发起宏观任务的方法有：

// script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、
// postMessage、MessageChannel、setImmediate(Node.js 环境)

// 微观任务的方法有：

// Promise.then、MutaionObserver、process.nextTick(Node.js 环境)
// async/await实际上是promise+generator的语法糖，也就是promise，也就是微观任务；