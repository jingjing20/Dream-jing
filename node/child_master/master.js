// 主进程
const cp = require('child_process'); //创建子进程
// fork 代表挂起一个进程 启动子进程
const child_process = cp.fork(__dirname + '/child.js'); //__dirname 代表当前目录
child_process.send('hah');

child_process.on('message', (str) => {
    console.log('parent', str);
})